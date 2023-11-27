package com.PBLProject.MedRecPBLSem3.forms;

import jakarta.persistence.Embeddable;


@Embeddable
public class PrescribedMedicineDetails {
    private String dosage;
    private String timesPerDay;

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getTimesPerDay() {
        return timesPerDay;
    }

    public void setTimesPerDay(String timesPerDay) {
        this.timesPerDay = timesPerDay;
    }
}
