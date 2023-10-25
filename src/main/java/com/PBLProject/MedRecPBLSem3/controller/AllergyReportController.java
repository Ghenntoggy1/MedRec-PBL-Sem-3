package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.AllergyReport;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.AllergyReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AllergyReportController {
    @Autowired
    AllergyReportRepository allergyReportRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/getAllergyReportFront")
    public ResponseEntity<List<AllergyReport>> getAllergyReportsByPatient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        //MedicalRecord medicalRecord1 = patient.getMedicalRecord();
        List<AllergyReport> allergyReports;
        if (medicalRecord != null) {
            allergyReports = medicalRecord.getAllergyReports();
            return ResponseEntity.ok(allergyReports);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAllergyReports")
    List<AllergyReport> getAllergyReports() {
        return allergyReportRepository.findAll();
    }

    @PostMapping("/addAllergyReport")
    AllergyReport newAllergyReport(@RequestBody AllergyReport allergyReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(allergyReport.getMedrecId());
        if (medicalRecord != null) {
            allergyReport.setMedicalRecord(medicalRecord);
            return allergyReportRepository.save(allergyReport);
        } else {
            return null;
        }
    }

    @PostMapping("/addAllergyReports")
    List<AllergyReport> newAllergyReports(@RequestBody List<AllergyReport> allergyReports) {
        List<AllergyReport> savedAllergyReports = new ArrayList<>();
        for (AllergyReport allergyReport : allergyReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(allergyReport.getMedrecId());
            if (medicalRecord != null) {
                allergyReport.setMedicalRecord(medicalRecord);
                savedAllergyReports.add(allergyReportRepository.save(allergyReport));
            }
        }
        return savedAllergyReports;
    }
}
