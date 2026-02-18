package com.app.portfolio.controller;

import com.app.portfolio.model.Contact;
import com.app.portfolio.service.ContactService;
import com.app.portfolio.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService service;
    private final EmailService emailService;  // MUST be here

    @PostMapping
    public Contact saveMessage(@RequestBody Contact contact) {

        Contact savedContact = service.saveContact(contact);

        emailService.sendContactEmail(
                contact.getName(),
                contact.getEmail(),
                contact.getMessage()
        );

        return savedContact;
    }
}
