package com.app.portfolio.service;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendContactEmail(String name, String email, String message) {

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

            helper.setTo("vaibhav.unitydev@gmail.com");   // Your email
            helper.setSubject("🚀 New Portfolio Contact from " + name);
            helper.setReplyTo(email);              // VERY IMPORTANT

            helper.setText(
                    "<h2>New Contact Message</h2>" +
                            "<p><strong>Name:</strong> " + name + "</p>" +
                            "<p><strong>Email:</strong> " + email + "</p>" +
                            "<p><strong>Message:</strong></p>" +
                            "<p>" + message + "</p>",
                    true
            );

            mailSender.send(mimeMessage);

            System.out.println("Email sent successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
