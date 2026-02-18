'use client';

import Image from 'next/image';

export default function About() {
  const highlights = [
    { icon: '⚙️', label: 'Unity Engine' },
    { icon: '🎮', label: 'C# Programming' },
    { icon: '🔧', label: 'Game Mechanics' },
    { icon: '🧠', label: 'Problem Solving' },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Profile Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-secondary/30 bg-card shadow-xl">

              <Image
                src="/profile.jpeg"   // 👈 change name if different
                alt="Vaibhav Bhaladhare"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />

            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/20 rounded-full"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">
                About <span className="text-accent">Me</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a passion for interactive entertainment, I specialize in creating engaging gameplay experiences. My journey in game development has been about combining technical excellence with creative vision to deliver unforgettable experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's designing complex game mechanics, optimizing performance, or crafting immersive worlds, I approach each project with meticulous attention to detail and a commitment to excellence.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg border border-secondary/30 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-sm group-hover:text-accent transition-colors">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
