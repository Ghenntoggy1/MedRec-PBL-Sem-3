package com.PBLProject.MedRecPBLSem3.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue
    private Long medrecId;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_institution_id", referencedColumnName = "institutionId")
    private Institution institution;
    @OneToMany(mappedBy = "medicalRecord")
    private List<AllergyReport> allergyReports;
    @OneToMany(mappedBy = "medicalRecord")
    private List<BoalaCronicaReport> boalaCronicaReports;
    @OneToMany(mappedBy = "medicalRecord")
    private List<AnalizaReport> analizaReports;
    @OneToMany(mappedBy = "medicalRecord")
    private List<OperatieReport> operatieReports;
    @Transient
    private Long patientIdnp;
    @Transient
    private Long allergyReportId;
    @Transient
    Long boalaCronicaReportId;
    @Transient
    Long analizaReportId;
    @Transient
    Long operatieReportId;
    @OneToOne(mappedBy = "medicalRecord")
    private Patient patient;

    public Long getMedrecId() {
        return medrecId;
    }

    public void setMedrecId(Long medrecId) {
        this.medrecId = medrecId;
    }

    public Institution getInstitution() {
        return institution;
    }

    public void setInstitution(Institution institution) {
        this.institution = institution;
    }

    public List<AllergyReport> getAllergyReports() {
        return allergyReports;
    }

    public void setAllergyReports(List<AllergyReport> allergyReports) {
        this.allergyReports = allergyReports;
        if (allergyReports != null) {
            for (AllergyReport allergyReport : allergyReports) {
                allergyReport.setMedicalRecord(this);
            }
        }
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

    public Long getAllergyReportId() {
        return allergyReportId;
    }

    public void setAllergyReportId(Long allergyReportId) {
        this.allergyReportId = allergyReportId;
    }

    public List<BoalaCronicaReport> getBoalaCronicaReports() {
        return boalaCronicaReports;
    }

    public void setBoalaCronicaReports(List<BoalaCronicaReport> boalaCronicaReports) {
        this.boalaCronicaReports = boalaCronicaReports;
    }

    public Long getBoalaCronicaReportId() {
        return boalaCronicaReportId;
    }

    public void setBoalaCronicaReportId(Long boalaCronicaReportId) {
        this.boalaCronicaReportId = boalaCronicaReportId;
    }

    public List<AnalizaReport> getAnalizaReports() {
        return analizaReports;
    }

    public void setAnalizaReports(List<AnalizaReport> analizaReports) {
        this.analizaReports = analizaReports;
    }

    public Long getAnalizaReportId() {
        return analizaReportId;
    }

    public void setAnalizaReportId(Long analizaReportId) {
        this.analizaReportId = analizaReportId;
    }

    public List<OperatieReport> getOperatieReports() {
        return operatieReports;
    }

    public void setOperatieReports(List<OperatieReport> operatieReports) {
        this.operatieReports = operatieReports;
    }

    public Long getOperatieReportId() {
        return operatieReportId;
    }

    public void setOperatieReportId(Long operatieReportId) {
        this.operatieReportId = operatieReportId;
    }
}
