package com.app.portfolio.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class EmailService {

    @Value("${RESEND_API_KEY}")
    private String apiKey;

    private final WebClient webClient = WebClient.builder()
            .baseUrl("https://api.resend.com")
            .build();

    public void sendContactEmail(String name, String email, String message) {

        webClient.post()
                .uri("/emails")
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .bodyValue(Map.of(
                        "from", "onboarding@resend.dev",
                        "to", "vaibhav.unitydev@gmail.com",
                        "subject", "🚀 New Portfolio Contact from " + name,
                        "html",
                        "<h2>New Contact Message</h2>" +
                                "<p><strong>Name:</strong> " + name + "</p>" +
                                "<p><strong>Email:</strong> " + email + "</p>" +
                                "<p><strong>Message:</strong></p>" +
                                "<p>" + message + "</p>"
                ))
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
