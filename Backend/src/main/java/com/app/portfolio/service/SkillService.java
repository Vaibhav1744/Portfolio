package com.app.portfolio.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.app.portfolio.repository.SkillRepository;
import com.app.portfolio.model.Skill;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository repository;

    public List<Skill> getAllSkills() {
        return repository.findAll();
    }

    public Skill addSkill(Skill skill) {
        return repository.save(skill);
    }
}
