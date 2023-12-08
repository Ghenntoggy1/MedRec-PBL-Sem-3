package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.models.Institution;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.InstitutionRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class InstitutionController {
    @Autowired
    InstitutionRepository institutionRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    PatientRepository patientRepository;

    @PostMapping("/addInstitution")
    Institution addInstitution(@RequestBody Institution institution) {
        Institution existingInstitution = institutionRepository.findByInstitutionName(institution.getInstitutionName());
        if (existingInstitution == null) {
            List<MedicalRecord> medicalRecords = new ArrayList<>();
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
            if (medicalRecord != null) {
                medicalRecord.setInstitution(institution);
                medicalRecords.add(medicalRecord);
                institution.setMedicalRecords(medicalRecords);
            }
        } else {
            List<MedicalRecord> medicalRecords = existingInstitution.getMedicalRecords();
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
            if (medicalRecord != null && !medicalRecords.contains(medicalRecord)) {
                medicalRecord.setInstitution(existingInstitution);
                medicalRecords.add(medicalRecord);
                existingInstitution.setMedicalRecords(medicalRecords);

            }
        }
        Institution institution1 = new Institution();
        institution1.setInstitutionName(institution.getInstitutionName());
        institution1.setMedicalRecords(new ArrayList<>());
        return institutionRepository.save(institution1);
    }

    @PostMapping("/addInstitutions")
    List<Institution> addInstitutions(@RequestBody List<Institution> institutions) {
        List<Institution> savedInstitutions = new ArrayList<>();
        Map<String, Institution> existingInstitutionsMap = new HashMap<>();
        for (Institution institution : institutions) {
            String institutionName = institution.getInstitutionName();
            Institution existingInstitution = existingInstitutionsMap.get(institutionName);
            if (existingInstitution == null) {
                List<MedicalRecord> medicalRecords = new ArrayList<>();
                MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
                if (medicalRecord != null) {
                    medicalRecords.add(medicalRecord);
                    institution.setMedicalRecords(medicalRecords);
                    savedInstitutions.add(institution);
                    existingInstitutionsMap.put(institutionName, institution);
                }
            } else {
                List<MedicalRecord> medicalRecords = existingInstitution.getMedicalRecords();
                MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
                if (medicalRecord != null && !medicalRecords.contains(medicalRecord)) {
                    medicalRecords.add(medicalRecord);
                    existingInstitution.setMedicalRecords(medicalRecords);
                    savedInstitutions.add(existingInstitution);
                }
            }
        }
        return institutionRepository.saveAll(savedInstitutions);
    }


}
