package com.app.portfolio.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.app.portfolio.repository.ProjectRepository;
import com.app.portfolio.model.Project;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository repository;

    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Project saveProject(Project project) {
        return repository.save(project);
    }
}

