package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MedicalRecordController {
    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @PostMapping("/addMedicalRecord")
    MedicalRecord newMedicalRecord(@RequestBody MedicalRecord newMedicalRecord) {
        return medicalRecordRepository.save(newMedicalRecord);
    }

    @PostMapping("/addMedicalRecords")
    List<MedicalRecord> newMedicalRecords(@RequestBody List<MedicalRecord> medicalRecords) {
        return medicalRecordRepository.saveAll(medicalRecords);
    }

    @GetMapping("/getMedicalRecords")
    List<MedicalRecord> getMedicalRecords() {
        return medicalRecordRepository.findAll();
    }

    @GetMapping("/getMedicalRecordByPatient")
     MedicalRecord getMedicalRecordByPatient(Patient patient) {
        return medicalRecordRepository.findByPatient(patient);
    }
}
