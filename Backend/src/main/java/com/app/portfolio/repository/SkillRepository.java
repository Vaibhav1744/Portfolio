package com.app.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.portfolio.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}
