package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue
    private Long medrecId;
//    private Long institutionId;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_institution_id", referencedColumnName = "institutionId")
    private Institution institution;
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

//    public Long getInstitutionId() {
//        return institutionId;
//    }
//
//    public void setInstitutionId(Long institutionId) {
//        this.institutionId = institutionId;
//    }

    public Institution getInstitution() {
        return institution;
    }

    public void setInstitution(Institution institution) {
        this.institution = institution;
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
