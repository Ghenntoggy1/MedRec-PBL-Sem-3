package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.models.Medic;
import com.PBLProject.MedRecPBLSem3.repository.MedicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MedicController {

    @Autowired
    private MedicRepository medicRepository;

    @PostMapping("/addMedic")
    Medic newMedic(@RequestBody Medic newMedic) {
        return medicRepository.save(newMedic);
    }

    @PostMapping("/addMedics")
    List<Medic> addMedics(@RequestBody List<Medic> medics) {
        return medicRepository.saveAll(medics);
    }

    @GetMapping("/getMedics")
    public List<Medic> getMedics() {
        return medicRepository.findAll();
    }

    @GetMapping("/getMedicByIdnp")
    public Medic getMedicByIdnp(Long idnp) {
        return medicRepository.findByidnp(idnp);
    }
}
