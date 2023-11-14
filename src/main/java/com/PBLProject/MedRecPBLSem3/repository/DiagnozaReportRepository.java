package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.DiagnozaReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiagnozaReportRepository extends JpaRepository<DiagnozaReport, Long> {
    DiagnozaReport findByDiagnozaName(String diagnozaName);
}
