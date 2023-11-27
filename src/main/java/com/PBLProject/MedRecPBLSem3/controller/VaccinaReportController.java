package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.models.VaccinaReport;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import com.PBLProject.MedRecPBLSem3.repository.VaccinaReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class VaccinaReportController {
    @Autowired
    PatientRepository patientRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    VaccinaReportRepository vaccinaReportRepository;

    @PostMapping("/getVaccinaReportFront")
    public ResponseEntity<List<VaccinaReport>> getVaccinaReportsByPatient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        List<VaccinaReport> vaccinaReports;
        if (medicalRecord != null) {
            vaccinaReports = medicalRecord.getVaccinaReports();
            return ResponseEntity.ok(vaccinaReports);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getVaccinaReports")
    public List<VaccinaReport> getVaccinaReports() {
        return vaccinaReportRepository.findAll();
    }

    @PostMapping("/addVaccinaReport")
    VaccinaReport newVaccinaReport (@RequestBody VaccinaReport vaccinaReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(vaccinaReport.getMedrecId());
        if (medicalRecord != null) {
            vaccinaReport.setMedicalRecord(medicalRecord);
            return vaccinaReportRepository.save(vaccinaReport);
        } else {
            return null;
        }
    }

    @PostMapping("/addVaccinaReports")
    public List<VaccinaReport> newVaccinaReports(@RequestBody List<VaccinaReport> vaccinaReports) {
        List<VaccinaReport> savedVaccinaReports = new ArrayList<>();
        for (VaccinaReport vaccinaReport : vaccinaReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(vaccinaReport.getMedrecId());
            if (medicalRecord != null) {
                vaccinaReport.setMedicalRecord(medicalRecord);
                savedVaccinaReports.add(vaccinaReportRepository.save(vaccinaReport));
            }
        }
        return savedVaccinaReports;
    }
}
