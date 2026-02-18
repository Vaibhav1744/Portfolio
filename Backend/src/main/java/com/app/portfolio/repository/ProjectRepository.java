package com.app.portfolio.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.app.portfolio.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}

