'use client';

import { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Vaibhav1744',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vaibhav-bhaladhare/',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vaibhav.unitydev@gmail.com',
    },

  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always interested in new projects and opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <InputField
              label="Your Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />

            <InputField
              label="Your Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />

            <TextAreaField
              label="Your Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />

            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            {submitted && (
              <div className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-accent text-center font-semibold">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Social Section */}
          <div className="space-y-8">
            <div className="p-8 rounded-lg border border-secondary/30 bg-card/50 space-y-6">

              <div>
                <h3 className="text-lg font-bold text-accent mb-2">
                  Contact Info
                </h3>
                <p className="text-muted-foreground">
                  Email: vaibhav.unitydev@gmail.com
                </p>
                <p className="text-muted-foreground">Location: India</p>
              </div>

              <div className="border-t border-secondary/30 pt-6">
                <h3 className="text-lg font-bold text-accent mb-4">
                  Connect With Me
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="p-3 rounded-lg border border-secondary/30 hover:bg-card/50 transition-all duration-300 hover:text-accent"

                        aria-label={link.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-secondary/30 pt-6">
                <p className="text-sm text-muted-foreground italic">
                  "The only way to do great work is to love what you do."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-12 border-t border-secondary/30 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Vaibhav Bhaladhare. Built with React & Tailwind CSS
      </div>
    </section>
  );
}

/* Reusable Components */

function InputField(props: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-semibold mb-2">
        {props.label}
      </label>
      <input
        {...props}
        required
        className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
      />
    </div>
  );
}

function TextAreaField(props: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-semibold mb-2">
        {props.label}
      </label>
      <textarea
        {...props}
        rows={5}
        required
        className="w-full px-4 py-3 rounded-lg bg-card border border-secondary/30 text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
      />
    </div>
  );
}
