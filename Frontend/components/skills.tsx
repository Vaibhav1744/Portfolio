'use client';

import { useEffect, useState } from 'react';

interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export default function Skills() {

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`)
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  // Dynamically extract categories
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-primary mb-6">
                {category}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div
                      key={skill.id}
                      className="group relative p-6 rounded-lg border border-secondary/30 bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="text-center space-y-3">
                        <div className="text-4xl">
                          {skill.icon}
                        </div>
                        <p className="font-semibold">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
