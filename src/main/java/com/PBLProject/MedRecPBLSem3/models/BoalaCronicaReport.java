package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class BoalaCronicaReport {
    @Id
    @GeneratedValue
    private Long boalaCronicaReportId;
    private String boalaCronicaReportName;
    private String medicName;
    private String description;
    private Timestamp timestamp;  // TODO FORMAT TIMESTAMP
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_medical_record_id", referencedColumnName = "medrecId")
    private MedicalRecord medicalRecord;

    public BoalaCronicaReport() {
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }

    @Transient
    private Long medrecId;

    public Long getAllergyReportId() {
        return boalaCronicaReportId;
    }

    public void setAllergyReportId(Long allergyReportId) {
        this.boalaCronicaReportId = allergyReportId;
    }

    public String getMedicName() {
        return medicName;
    }

    public void setMedicName(String medicName) {
        this.medicName = medicName;
    }

    public MedicalRecord getMedicalRecord() {
        return medicalRecord;
    }

    public void setMedicalRecord(MedicalRecord medicalRecord) {
        this.medicalRecord = medicalRecord;
    }

    public String getAllergyName() {
        return boalaCronicaReportName;
    }

    public void setAllergyName(String allergyName) {
        this.boalaCronicaReportName = allergyName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public Long getMedrecId() {
        return medrecId;
    }

    public void setMedrecId(Long medrecId) {
        this.medrecId = medrecId;
    }
}
