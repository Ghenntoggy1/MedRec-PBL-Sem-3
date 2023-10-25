package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.AllergyReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AllergyReportRepository extends JpaRepository<AllergyReport, Long> {
    AllergyReport findByAllergyName(String allergyName);
}
