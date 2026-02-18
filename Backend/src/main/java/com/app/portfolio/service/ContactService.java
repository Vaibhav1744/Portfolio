package com.app.portfolio.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.app.portfolio.repository.ContactRepository;
import com.app.portfolio.model.Contact;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository repository;

    // Save contact message
    public Contact saveContact(Contact contact) {
        return repository.save(contact);
    }

    // Get all messages (for admin panel later)
    public List<Contact> getAllContacts() {
        return repository.findAll();
    }

    // Delete message (optional)
    public void deleteContact(Long id) {
        repository.deleteById(id);
    }
}

