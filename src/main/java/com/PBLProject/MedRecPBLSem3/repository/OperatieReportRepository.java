package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.OperatieReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperatieReportRepository extends JpaRepository<OperatieReport, Long> {
    OperatieReport findOperatieReportByOperatieName(String operatieName);
}
