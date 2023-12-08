package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.forms.MedicalRecordForm;
import com.PBLProject.MedRecPBLSem3.models.Institution;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MedicalRecordController {
    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/addMedicalRecord")
    MedicalRecord newMedicalRecord(@RequestBody MedicalRecordForm medicalRecord) {
        Patient patient = patientRepository.findByidnp(medicalRecord.getPatientIdnp());
        MedicalRecord medicalRecord1 = new MedicalRecord();
        if (patient != null) {
            medicalRecord1.setPatient(patient);
            return medicalRecordRepository.save(medicalRecord1);
        } else {
            return null;
        }
    }

    @PostMapping("/addMedicalRecords")
    List<MedicalRecord> newMedicalRecords(@RequestBody List<MedicalRecordForm> medicalRecords) {
        List<MedicalRecord> savedMedicalRecords = new ArrayList<>();
        MedicalRecord medicalRecord1;
        for (MedicalRecordForm medicalRecord : medicalRecords) {
            medicalRecord1 = new MedicalRecord();
            Patient patient = patientRepository.findByidnp(medicalRecord.getPatientIdnp());
            if (patient != null) {
                medicalRecord1.setPatient(patient);
                savedMedicalRecords.add(medicalRecord1);
            }
        }
        return medicalRecordRepository.saveAll(savedMedicalRecords);
    }

    @GetMapping("/getMedicalRecords")
    List<MedicalRecord> getMedicalRecords() {
        return medicalRecordRepository.findAll();
    }

    @GetMapping("/getMedicalRecordByPatient")
    MedicalRecord getMedicalRecordByPatient(@RequestParam Long idnp) {
        Patient patient = patientRepository.findByidnp(idnp);
        if (patient != null) {
            return medicalRecordRepository.findByPatient(patient);
        } else {
            return null;
        }
    }

    @GetMapping("/getMedicalRecordIdByPatient")
    Long getMedicalRecordIdByPatient(@RequestParam Long idnp) {
        Patient patient = patientRepository.findByidnp(idnp);
        if (patient != null) {
            return medicalRecordRepository.findByPatient(patient).getMedrecId();
        } else {
            return null;
        }
    }

    @PostMapping("/getInstitutionByIdnp")
    public String getInstitutionByIdnp(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(patient.getMedicalRecord().getMedrecId());
        if (medicalRecord.getInstitution() != null) {
            return medicalRecord.getInstitution().getInstitutionName();
        } else {
            return "Necunoscută";
        }
    }

