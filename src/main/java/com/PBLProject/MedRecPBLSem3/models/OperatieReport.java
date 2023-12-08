package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class OperatieReport {
    @Id
    @GeneratedValue
    private Long operatieReportId;
    private String operatieName;
    private String medicName;
    private String description;
    private String tipAnestezie;
    private String descrierePostOperatorie;
    private String complicatii;
    private Timestamp timestamp; 

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_medical_record_id", referencedColumnName = "medrecId")
    private MedicalRecord medicalRecord;

    @Transient
    private Long medrecId;

    public Long getOperatieReportId() {
        return operatieReportId;
    }

    public void setOperatieReportId(Long operatieReportId) {
        this.operatieReportId = operatieReportId;
    }

    public String getOperatieName() {
        return operatieName;
    }

    public void setOperatieName(String operatieName) {
        this.operatieName = operatieName;
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

    public String getTipAnestezie() {
        return tipAnestezie;
    }

    public void setTipAnestezie(String tipAnestezie) {
        this.tipAnestezie = tipAnestezie;
    }

    public String getDescrierePostOperatorie() {
        return descrierePostOperatorie;
    }

    public void setDescrierePostOperatorie(String descrierePostOperatorie) {
        this.descrierePostOperatorie = descrierePostOperatorie;
    }

    public String getComplicatii() {
        return complicatii;
    }

    public void setComplicatii(String complicatii) {
        this.complicatii = complicatii;
    }
}
