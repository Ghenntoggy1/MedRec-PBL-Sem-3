package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.Medic;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.MedicRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private MedicRepository medicRepository;

    @PostMapping("/login/{userType}")
    public ResponseEntity<String> login(@PathVariable String userType, @RequestBody Long IDNP) {
        if ("medic".equals(userType)) {
            Medic medic = medicRepository.findByidnp(IDNP);
            if (medic != null) {
                return ResponseEntity.ok("LOGARE CA MEDIC CU SUCCES");
            }
        } else if ("pacient".equals(userType)) {
            Patient patient = patientRepository.findByidnp(IDNP);
            if (patient != null) {
                return ResponseEntity.ok("LOGARE CA PACIENT CU SUCCES");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("IDNP GREŞIT!");
    }
}
