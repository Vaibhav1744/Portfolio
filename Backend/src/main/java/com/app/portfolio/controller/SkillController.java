package com.app.portfolio.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.app.portfolio.service.SkillService;
import com.app.portfolio.model.Skill;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService service;

    @GetMapping
    public List<Skill> getSkills() {
        return service.getAllSkills();
    }

    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return service.addSkill(skill);
    }
}
