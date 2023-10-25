package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.BoalaCronicaReport;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.BoalaCronicaReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BoalaCronicaReportController {
    @Autowired
    BoalaCronicaReportRepository boalaCronicaReportRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/getBoalaCronicaReportFront")
    public ResponseEntity<List<BoalaCronicaReport>> getBoalaCronicaReportsByPatient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        List<BoalaCronicaReport> boalaCronicaReports;
        if (medicalRecord != null) {
            boalaCronicaReports = medicalRecord.getBoalaCronicaReports();
            return ResponseEntity.ok(boalaCronicaReports);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getBoalaCronicaReports")
    List<BoalaCronicaReport> getBoalaCronicaReports() {
        return boalaCronicaReportRepository.findAll();
    }

    @PostMapping("/addBoalaCronicaReport")
    BoalaCronicaReport newBoalaCronicaReport(@RequestBody BoalaCronicaReport boalaCronicaReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(boalaCronicaReport.getMedrecId());
        if (medicalRecord != null) {
            boalaCronicaReport.setMedicalRecord(medicalRecord);
            return boalaCronicaReportRepository.save(boalaCronicaReport);
        } else {
            return null;
        }
    }

    @PostMapping("/addBoalaCronicaReports")
    List<BoalaCronicaReport> newBoalaCronicaReports(@RequestBody List<BoalaCronicaReport> boalaCronicaReports) {
        List<BoalaCronicaReport> savedBoalaCronicaReports = new ArrayList<>();
        for (BoalaCronicaReport boalaCronicaReport : boalaCronicaReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(boalaCronicaReport.getMedrecId());
            if (medicalRecord != null) {
                boalaCronicaReport.setMedicalRecord(medicalRecord);
                savedBoalaCronicaReports.add(boalaCronicaReportRepository.save(boalaCronicaReport));
            }
        }
        return savedBoalaCronicaReports;
    }
}
