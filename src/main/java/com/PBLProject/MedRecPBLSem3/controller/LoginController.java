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

    @PostMapping("/login/medic")
    public ResponseEntity<String> loginMedic(@RequestBody LoginForm loginForm) {
        Medic medic = medicRepository.findByidnp(loginForm.idnp);
        if (medic != null) {
            return ResponseEntity.ok("LOGARE CA MEDIC CU SUCCES");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("IDNP GREŞIT!");  // TODO write on page INVALID IDNP
    }

    @PostMapping("/login/pacient")
    public ResponseEntity<String> loginPacient(@RequestBody LoginForm loginForm) {
        Patient patient = patientRepository.findByidnp(loginForm.idnp);
        if (patient != null) {
            return ResponseEntity.ok("LOGARE CA PACIENT CU SUCCES! " + patient.getIdnp());
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("IDNP GREŞIT!");
    }
}
