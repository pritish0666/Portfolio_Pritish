'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: 'cplusplus' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Python', icon: 'python' },
    { name: 'HTML', icon: 'html5' },
    { name: 'CSS', icon: 'css3' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Docker', icon: 'docker' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'ReactJs', icon: 'react' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Visual Studio Code', icon: 'vscode' },
    { name: 'Authorization', icon: 'shield' },
    { name: 'JWT', icon: 'jwt' },
    { name: 'OAuth', icon: 'oauth' },
    { name: 'Web API', icon: 'webapi' },
  ];

  return (
    <section id="skills" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} className="px-4 py-2 text-lg rounded-full flex items-center">
            <i className={`devicon-${skill.icon}-plain colored mr-2`}></i>
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
