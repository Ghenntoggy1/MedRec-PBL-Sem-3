package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.OperatieReport;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.OperatieReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class OperatieReportController {
    @Autowired
    OperatieReportRepository operatieReportRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/getOperatieReportFront")
    public ResponseEntity<List<OperatieReport>>getOperatieReportsByPatient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        List<OperatieReport> operatieReports;
        if (medicalRecord != null) {
            operatieReports = medicalRecord.getOperatieReports();
            return ResponseEntity.ok(operatieReports);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/getOperatieReports")
    List<OperatieReport> getOperatieReports() {
        return operatieReportRepository.findAll();
    }

    @PostMapping("/addOperatieReport")
    OperatieReport newOperatieReport(@RequestBody OperatieReport operatieReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(operatieReport.getMedrecId());
        if (medicalRecord != null) {
            operatieReport.setMedicalRecord(medicalRecord);
            return operatieReportRepository.save(operatieReport);
        } else {
            return null;
        }
    }

    @PostMapping("addOperatieReports")
    List<OperatieReport> newOperatieReports(@RequestBody List<OperatieReport> operatieReports) {
        List<OperatieReport> savedOperatieReports = new ArrayList<>();
        for (OperatieReport operatieReport : operatieReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(operatieReport.getMedrecId());
            if (medicalRecord != null) {
                operatieReport.setMedicalRecord(medicalRecord);
                savedOperatieReports.add(operatieReportRepository.save(operatieReport));
            }
        }
        return savedOperatieReports;
    }
}
