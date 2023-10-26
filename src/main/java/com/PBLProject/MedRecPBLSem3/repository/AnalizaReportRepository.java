package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.AnalizaReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnalizaReportRepository extends JpaRepository<AnalizaReport, Long> {
    AnalizaReport findByAnalizaName(String analizaName);
}
