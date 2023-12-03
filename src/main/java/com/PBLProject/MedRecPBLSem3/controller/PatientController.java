package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.PatientsDTO;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    @GetMapping("/getPatients")
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/getPatientByIdnp")
    public Patient getPatientByIdnp(Long idnp) {
        return patientRepository.findByidnp(idnp);
    }

    @GetMapping("/getPatientDTO")
    public PatientsDTO getPatientDTO(@RequestParam Long idnp) {

        Patient patient = patientRepository.findByidnp(idnp);
        PatientsDTO patientDTO = new PatientsDTO();
        patientDTO.setFullName(patient.getFirstName() + " " + patient.getLastName());
        patientDTO.setDateOfBirth(patient.getDateOfBirth());
        BeanUtils.copyProperties(patient, patientDTO);
        return patientDTO;
    }

    @GetMapping("/getPatientsDTO")
    public List<PatientsDTO> getPatientsDTO() {
        List<Patient> patients = patientRepository.findAll();
        List<PatientsDTO> patientsDTOList = new ArrayList<>();

        for (Patient patient : patients) {
            PatientsDTO patientsDTO = new PatientsDTO();
            patientsDTO.setFullName(patient.getFirstName() + " " + patient.getLastName());
            patientsDTO.setDateOfBirth(patient.getDateOfBirth());
            BeanUtils.copyProperties(patient, patientsDTO);
            patientsDTOList.add(patientsDTO);
        }

        return patientsDTOList;
    }
}
