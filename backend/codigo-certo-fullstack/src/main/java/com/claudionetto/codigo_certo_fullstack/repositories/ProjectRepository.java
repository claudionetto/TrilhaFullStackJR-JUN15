package com.claudionetto.codigo_certo_fullstack.repositories;

import com.claudionetto.codigo_certo_fullstack.models.entities.Project;
import com.claudionetto.codigo_certo_fullstack.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
