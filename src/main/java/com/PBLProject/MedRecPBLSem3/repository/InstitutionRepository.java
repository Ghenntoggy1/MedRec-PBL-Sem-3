package com.PBLProject.MedRecPBLSem3.repository;

import com.PBLProject.MedRecPBLSem3.models.Institution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {
    Institution findByInstitutionName(String institutionName);
}
