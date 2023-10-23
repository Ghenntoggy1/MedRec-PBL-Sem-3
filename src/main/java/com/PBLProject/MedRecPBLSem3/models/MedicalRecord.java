package com.PBLProject.MedRecPBLSem3.models;

import jakarta.persistence.*;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue
    private Long medrecId;
    private Long institutionId;
    private Long diagnosisReportId;
    @Transient
    private Long patientIdnp;
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
        if (patient != null) {
            patient.setMedicalRecord(this);
        }
    }

    public Long getPatientIdnp() {
        return patientIdnp;
    }

    public void setPatientIdnp(Long patientIdnp) {
        this.patientIdnp = patientIdnp;
    }
}
