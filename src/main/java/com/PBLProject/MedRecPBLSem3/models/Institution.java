package com.PBLProject.MedRecPBLSem3.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Institution {
    @Id
    @GeneratedValue
    private Long institutionId;
    private String institutionName;

    @Transient
    private Long medrecId;

    @OneToMany(mappedBy = "institution")
    private List<MedicalRecord> medicalRecords;

    public Long getInstitutionId() {
        return institutionId;
    }

    public void setInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
    }

    public String getInstitutionName() {
        return institutionName;
    }

    public void setInstitutionName(String institutionName) {
        this.institutionName = institutionName;
    }

    public List<MedicalRecord> getMedicalRecords() {
        return medicalRecords;
    }

    public void setMedicalRecords(List<MedicalRecord> medicalRecords) {
        this.medicalRecords = medicalRecords;
        if (medicalRecords != null) {
            for (MedicalRecord medicalRecord : medicalRecords) {
                medicalRecord.setInstitution(this);
            }
        }
    }

//    public void setPatient(Patient patient) {
//        this.patient = patient;
//        if (patient != null) {
//            patient.setMedicalRecord(this);
//        }
//    }

    public Long getMedrecId() {
        return medrecId;
    }

    public void setMedrecId(Long medrecId) {
        this.medrecId = medrecId;
    }
}
