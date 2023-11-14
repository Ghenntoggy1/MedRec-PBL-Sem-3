package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.DiagnozaReport;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.repository.DiagnozaReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DiagnozaReportController {
    @Autowired
    DiagnozaReportRepository diagnozaReportRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/getDiagnozaReports")
    List<DiagnozaReport> getDiagnozaReports() {
        return diagnozaReportRepository.findAll();
    }

    @PostMapping("/addDiagnozaReport")
    DiagnozaReport newDiagnozaReport(@RequestBody DiagnozaReport diagnozaReport) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(diagnozaReport.getMedrecId());
        if (medicalRecord != null) {
            diagnozaReport.setMedicalRecord(medicalRecord);
            return diagnozaReportRepository.save(diagnozaReport);
        }
        else {
            return null;
        }
    }

    @PostMapping("/addDiagnozaReports")
    List<DiagnozaReport> newDiagnozaReports(@RequestBody List<DiagnozaReport> diagnozaReports) {
        List<DiagnozaReport> savedDiagnozaReports = new ArrayList<>();
        for (DiagnozaReport diagnozaReport : diagnozaReports) {
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(diagnozaReport.getMedrecId());
            if (medicalRecord != null) {
                diagnozaReport.setMedicalRecord(medicalRecord);
                savedDiagnozaReports.add(diagnozaReportRepository.save(diagnozaReport));
            }
        }
        return savedDiagnozaReports;
    }
}
