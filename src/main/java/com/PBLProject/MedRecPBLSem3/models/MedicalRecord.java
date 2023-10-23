package com.PBLProject.MedRecPBLSem3.models;

import jakarta.persistence.*;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue
    private Long medrecId;
    private Long institutionId;
    private Long diagnosisReportId;
    @OneToOne(mappedBy = "medicalRecord")
    private Patient patient;

    public Long getMedrecId() {
        return medrecId;
    }

    public void setMedrecId(Long medrecId) {
        this.medrecId = medrecId;
    }

    public Long getInstitutionId() {
        return institutionId;
    }

    public void setInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
    }

    public Long getDiagnosisReportId() {
        return diagnosisReportId;
    }

    public void setDiagnosisReportId(Long diagnosisReportId) {
        this.diagnosisReportId = diagnosisReportId;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    @Override
    public String toString() {
        return "MedicalRecord{" +
                "medrecId=" + medrecId +
                ", institutionId=" + institutionId +
                ", diagnosisReportId=" + diagnosisReportId +
                ", patient=" + patient +
                '}';
    }
}
