package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.AnalizaReport;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.AnalizaReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AnalizaReportController {
    @Autowired
    AnalizaReportRepository analizaReportRepository;
    
    @Autowired
    MedicalRecordRepository medicalRecordRepository;
    
    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/getAnalizaReportFront")
    public ResponseEntity<List<AnalizaReport>> getAnalizaReportsByPatient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        List<AnalizaReport> analizaReports;
        if (medicalRecord != null) {
            analizaReports = medicalRecord.getAnalizaReports();
            return ResponseEntity.ok(analizaReports);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAnalizaReports")
    List<AnalizaReport> getAnalizaReports() {
        return analizaReportRepository.findAll();
    }

    @PostMapping("/addAnalizaReport")
    AnalizaReport newAnalizaReport(@RequestBody AnalizaReport analizaReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(analizaReport.getMedrecId());
        if (medicalRecord != null) {
            analizaReport.setMedicalRecord(medicalRecord);
            return analizaReportRepository.save(analizaReport);
        } else {
            return null;
        }
    }

    @PostMapping("/addAnalizaReports")
    List<AnalizaReport> newAnalizaReports(@RequestBody List<AnalizaReport> analizaReports) {
        List<AnalizaReport> savedAnalizaReports = new ArrayList<>();
        for (AnalizaReport analizaReport : analizaReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(analizaReport.getMedrecId());
            if (medicalRecord != null) {
                analizaReport.setMedicalRecord(medicalRecord);
                savedAnalizaReports.add(analizaReportRepository.save(analizaReport));
            }
        }
        return savedAnalizaReports;
    }
}
