package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class InformatiiGeneraleController {
    @Autowired
    private PatientRepository patientRepository;

    @PostMapping ("/informatii_generale")
    public ResponseEntity<Patient> getGeneralInfo(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        if (patient != null) {
            return ResponseEntity.ok(patient);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
