package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.Institution;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.InstitutionRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InstitutionController {
    @Autowired
    InstitutionRepository institutionRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @PostMapping("/addInstitution")
    Institution addInstitution(@RequestBody Institution institution) {
        Institution existingInstitution = institutionRepository.findByInstitutionName(institution.getInstitutionName());
        if (existingInstitution != null) {
            List<MedicalRecord> medicalRecords = existingInstitution.getMedicalRecords();
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
            if (medicalRecord != null) {
                if (!medicalRecords.contains(medicalRecord)) {
                    medicalRecords.add(medicalRecord);
                    existingInstitution.setMedicalRecords(medicalRecords);
                    return institutionRepository.save(existingInstitution);
                }
            }
        } else {
            List<MedicalRecord> medicalRecords = new ArrayList<>();
            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
            if (medicalRecord != null) {
                medicalRecords.add(medicalRecord);
                institution.setMedicalRecords(medicalRecords);
                return institutionRepository.save(institution);
            }
        }
        Institution institution1 = new Institution();
        institution1.setInstitutionName(institution.getInstitutionName());
        institution1.setMedicalRecords(new ArrayList<MedicalRecord>());
        return institutionRepository.save(institution1);
    }
}
