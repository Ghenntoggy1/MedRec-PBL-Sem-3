package com.PBLProject.MedRecPBLSem3.controller;

import com.PBLProject.MedRecPBLSem3.forms.LoginForm;
import com.PBLProject.MedRecPBLSem3.forms.Prescription;
import com.PBLProject.MedRecPBLSem3.models.DiagnozaReport;
import com.PBLProject.MedRecPBLSem3.models.MedicalRecord;
import com.PBLProject.MedRecPBLSem3.models.Patient;
import com.PBLProject.MedRecPBLSem3.repository.DiagnozaReportRepository;
import com.PBLProject.MedRecPBLSem3.repository.MedicalRecordRepository;
import com.PBLProject.MedRecPBLSem3.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PrescriptionController {
    @Autowired
    PatientRepository patientRepository;

    @Autowired
    MedicalRecordRepository medicalRecordRepository;

    @Autowired
    DiagnozaReportRepository diagnozaReportRepository;

    @PostMapping("/getPrescriptionsFront")
    public ResponseEntity<List<Prescription>> getPrescriptionsByPatient(@RequestBody LoginForm loginForm) {
        List<Prescription> prescriptions = new ArrayList<>();
        Patient patient = patientRepository.findByidnp(loginForm.idnp);

        if (patient != null && patient.getMedicalRecord() != null) {
            MedicalRecord medicalRecord = patient.getMedicalRecord();

            if (medicalRecord.getDiagnozaReports() != null) {
                List<DiagnozaReport> diagnozaReports = medicalRecord.getDiagnozaReports();

                for (DiagnozaReport diagnozaReport : diagnozaReports) {
                    if (diagnozaReport.getPrescribedMedicine() != null && !diagnozaReport.getPrescribedMedicine().isEmpty()) {
                        Prescription prescription = new Prescription();
                        prescription.setPrescriptionDetails(diagnozaReport.getPrescribedMedicine());
                        prescription.setMedicName(diagnozaReport.getMedicName());
                        prescription.setTimestamp(diagnozaReport.getTimestamp());
                        prescriptions.add(prescription);
                    }
                }
            } else {
                return null;
            }
        } else {
            return null;
        }

        return ResponseEntity.ok(prescriptions);
    }
}
