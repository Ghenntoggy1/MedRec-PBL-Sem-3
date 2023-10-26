package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Map;

@Entity
public class AnalizaReport {
    @Id
    @GeneratedValue
    private Long analizaReportId;
    private String analizaName;
    private String medicName;
    private String labName;
    @ElementCollection
    @CollectionTable(name = "analiza_values")
    @MapKeyColumn(name = "parameter_name")
    @Column(name = "parameter_value")
    private Map<String, String> values;
    private String description;
    private Timestamp timestamp;  // TODO FORMAT TIMESTAMP
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_medical_record_id", referencedColumnName = "medrecId")
    private MedicalRecord medicalRecord;

    @Transient
    private Long medrecId;

    public AnalizaReport() {
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }

    public Long getAnalizaReportId() {
        return analizaReportId;
    }

    public void setAnalizaReportId(Long analizaReportId) {
        this.analizaReportId = analizaReportId;
    }

    public String getAnalizaName() {
        return analizaName;
    }

    public void setAnalizaName(String analizaName) {
        this.analizaName = analizaName;
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

    public String getLabName() {
        return labName;
    }

    public void setLabName(String labName) {
        this.labName = labName;
    }

    public Map<String, String> getValues() {
        return values;
    }

    public void setValues(Map<String, String> values) {
        this.values = values;
    }
}
