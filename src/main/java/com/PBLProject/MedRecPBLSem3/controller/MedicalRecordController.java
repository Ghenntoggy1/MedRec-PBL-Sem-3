package com.PBLProject.MedRecPBLSem3.controller;

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
    MedicalRecord newMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
        Patient patient = patientRepository.findByidnp(medicalRecord.getPatientIdnp());
        if (patient != null) {
            medicalRecord.setPatient(patient);
            return medicalRecordRepository.save(medicalRecord);
        } else {
            return null;
        }
    }

    @PostMapping("/addMedicalRecords")
    List<MedicalRecord> newMedicalRecords(@RequestBody List<MedicalRecord> medicalRecords) {
        List<MedicalRecord> savedMedicalRecords = new ArrayList<>();
        for (MedicalRecord medicalRecord : medicalRecords) {
            Patient patient = patientRepository.findByidnp(medicalRecord.getPatientIdnp());
            if (patient != null) {
                medicalRecord.setPatient(patient);
                savedMedicalRecords.add(medicalRecordRepository.save(medicalRecord));
            }
        }
        return savedMedicalRecords;
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

//    @PostMapping("/addMedicalRecord")
//    MedicalRecord addMedicalRecord(@RequestBody MedicalRecord medicalRecord) {
//        Institution existingInstitution = institutionRepository.findByInstitutionName(institution.getInstitutionName());
//        if (existingInstitution != null) {
//            List<MedicalRecord> medicalRecords = existingInstitution.getMedicalRecords();
//            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
//            if (medicalRecord != null) {
//                if (!medicalRecords.contains(medicalRecord)) {
//                    medicalRecords.add(medicalRecord);
//                    existingInstitution.setMedicalRecords(medicalRecords);
//                    return institutionRepository.save(existingInstitution);
//                }
//            }
//        } else {
//            List<MedicalRecord> medicalRecords = new ArrayList<>();
//            MedicalRecord medicalRecord = medicalRecordRepository.findByMedrecId(institution.getMedrecId());
//            if (medicalRecord != null) {
//                medicalRecords.add(medicalRecord);
//                institution.setMedicalRecords(medicalRecords);
//                return institutionRepository.save(institution);
//            }
//        }
//        Institution institution1 = new Institution();
//        institution1.setInstitutionName(institution.getInstitutionName());
//        institution1.setMedicalRecords(new ArrayList<MedicalRecord>());
//        return institutionRepository.save(institution1);
//    }
}
