package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class VaccinaReport {
    @Id
    @GeneratedValue
    private Long vaccinaReportId;
    private String vaccinaName;
    private String medicName;
    private String description;
    private Timestamp timestamp;  // TODO FORMAT TIMESTAMP
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_medical_record_id", referencedColumnName = "medrecId")
    private MedicalRecord medicalRecord;

    @Transient
    private Long medrecId;

    public Long getVaccinaReportId() {
        return vaccinaReportId;
    }

    public void setVaccinaReportId(Long vaccinaReportId) {
        this.vaccinaReportId = vaccinaReportId;
    }

    public String getVaccinaName() {
        return vaccinaName;
    }

    public void setVaccinaName(String vaccinaName) {
        this.vaccinaName = vaccinaName;
    }

    public String getMedicName() {
        return medicName;
    }

    public void setMedicName(String medicName) {
        this.medicName = medicName;
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

    public MedicalRecord getMedicalRecord() {
        return medicalRecord;
    }

    public void setMedicalRecord(MedicalRecord medicalRecord) {
        this.medicalRecord = medicalRecord;
    }

    public Long getMedrecId() {
        return medrecId;
    }

    public void setMedrecId(Long medrecId) {
        this.medrecId = medrecId;
    }
}
