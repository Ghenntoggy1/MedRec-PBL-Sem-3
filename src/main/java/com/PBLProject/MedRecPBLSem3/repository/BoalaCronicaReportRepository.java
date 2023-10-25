package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.BoalaCronicaReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoalaCronicaReportRepository  extends JpaRepository<BoalaCronicaReport, Long> {
    BoalaCronicaReport findByBoalaCronicaReportName(String boalaCronicaReportName);
}
