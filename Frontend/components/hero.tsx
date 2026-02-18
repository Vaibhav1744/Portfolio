'use client';

import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="absolute w-64 h-64 border border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute w-96 h-96 border border-secondary/20 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Main heading */}
        <div className="space-y-6">
          <div className="inline-block">
            <p className="text-sm font-mono text-accent mb-2">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Unity Game</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build immersive gameplay experiences using{' '}
            <span className="text-accent font-semibold">Unity</span> and{' '}
            <span className="text-accent font-semibold">C#</span>. Transforming creative ideas into engaging, interactive worlds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/VaibhavResume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-secondary text-accent hover:bg-secondary/10 font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground font-mono">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-secondary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-secondary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
