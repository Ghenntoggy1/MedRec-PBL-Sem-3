package com.PBLProject.MedRecPBLSem3.models;

import com.PBLProject.MedRecPBLSem3.forms.PrescribedMedicineDetails;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Map;

@Entity
public class DiagnozaReport {
    @Id
    @GeneratedValue
    private Long diagnozaReportId;
    private String diagnozaName;
    private String description;
    private String medicName;
    private String conclusion;
    @ElementCollection
    @CollectionTable(name = "prescription")
    @MapKeyColumn(name = "prescription_name")
    @Column(name = "prescription_value")
    private Map<String, PrescribedMedicineDetails> prescribedMedicine;  
    private String prescribedOperation;
    private Timestamp timestamp;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_medical_record_id", referencedColumnName = "medrecId")
    private MedicalRecord medicalRecord;
    @Transient
    private Long medrecId;

    public Long getDiagnozaReportId() {
        return diagnozaReportId;
    }

    public void setDiagnozaReportId(Long diagnozaReportId) {
        this.diagnozaReportId = diagnozaReportId;
    }

    public String getDiagnozaName() {
        return diagnozaName;
    }

    public void setDiagnozaName(String diagnozaName) {
        this.diagnozaName = diagnozaName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getConclusion() {
        return conclusion;
    }

    public void setConclusion(String conclusion) {
        this.conclusion = conclusion;
    }

    public String getPrescribedOperation() {
        return prescribedOperation;
    }

    public void setPrescribedOperation(String prescribedOperation) {
        this.prescribedOperation = prescribedOperation;
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

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public String getMedicName() {
        return medicName;
    }

    public void setMedicName(String medicName) {
        this.medicName = medicName;
    }

    public Map<String, PrescribedMedicineDetails> getPrescribedMedicine() {
        return prescribedMedicine;
    }

    public void setPrescribedMedicine(Map<String, PrescribedMedicineDetails> prescribedMedicine) {
        this.prescribedMedicine = prescribedMedicine;
    }
}
