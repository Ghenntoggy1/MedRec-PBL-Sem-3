package com.PBLProject.MedRecPBLSem3.forms;

import java.sql.Timestamp;
import java.util.Map;

public class Prescription {
    private String medicName;

    private Map<String, PrescribedMedicineDetails> prescriptionDetails;
    private Timestamp timestamp;

    public String getMedicName() {
        return medicName;
    }

    public void setMedicName(String medicName) {
        this.medicName = medicName;
    }

    public Map<String, PrescribedMedicineDetails> getPrescriptionDetails() {
        return prescriptionDetails;
    }

    public void setPrescriptionDetails(Map<String, PrescribedMedicineDetails> prescriptionDetails) {
        this.prescriptionDetails = prescriptionDetails;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
