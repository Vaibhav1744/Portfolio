package com.app.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.portfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
