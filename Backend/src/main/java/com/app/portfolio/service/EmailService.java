package com.app.portfolio.service;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class EmailService {

    @Value("${RESEND_API_KEY}")
    private String apiKey;

    private final WebClient webClient = WebClient.builder()
            .baseUrl("https://api.resend.com")
            .defaultHeader("Authorization", "Bearer " + apiKey)
            .defaultHeader("Content-Type", "application/json")
            .build();

    public void sendContactEmail(String name, String email, String message) {

        String json = """
        {
          "from": "Portfolio <onboarding@resend.dev>",
          "to": ["vaibhav.unitydev@gmail.com"],
          "subject": "New Portfolio Contact from %s",
          "html": "<h2>New Message</h2><p><b>Name:</b> %s</p><p><b>Email:</b> %s</p><p>%s</p>"
        }
        """.formatted(name, name, email, message);

        webClient.post()
                .uri("/emails")
                .bodyValue(json)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
