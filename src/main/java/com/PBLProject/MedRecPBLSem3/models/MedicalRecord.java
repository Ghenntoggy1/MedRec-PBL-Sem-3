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
    @OneToMany(mappedBy = "medicalRecord")
    private List<DiagnozaReport> diagnozaReports;
    @OneToOne(mappedBy = "medicalRecord")
    private Patient patient;
    @OneToMany(mappedBy = "medicalRecord")
    private List<VaccinaReport> vaccinaReports;

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

    public List<BoalaCronicaReport> getBoalaCronicaReports() {
        return boalaCronicaReports;
    }

    public void setBoalaCronicaReports(List<BoalaCronicaReport> boalaCronicaReports) {
        this.boalaCronicaReports = boalaCronicaReports;
    }

    public List<AnalizaReport> getAnalizaReports() {
        return analizaReports;
    }

    public void setAnalizaReports(List<AnalizaReport> analizaReports) {
        this.analizaReports = analizaReports;
    }

    public List<OperatieReport> getOperatieReports() {
        return operatieReports;
    }

    public void setOperatieReports(List<OperatieReport> operatieReports) {
        this.operatieReports = operatieReports;
    }

    public List<DiagnozaReport> getDiagnozaReports() {
        return diagnozaReports;
    }

    public void setDiagnozaReports(List<DiagnozaReport> diagnozaReports) {
        this.diagnozaReports = diagnozaReports;
    }

    public List<VaccinaReport> getVaccinaReports() {
        return vaccinaReports;
    }

    public void setVaccinaReports(List<VaccinaReport> vaccinaReports) {
        this.vaccinaReports = vaccinaReports;
    }
}
