package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/addPatient")
    Patient newPatient(@RequestBody Patient newPatient) {
        return patientRepository.save(newPatient);
    }
    @PostMapping("/addPatients")
    List<Patient> addPatients(@RequestBody List<Patient> patients) {
        return patientRepository.saveAll(patients);
    }
}
