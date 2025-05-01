
import React from 'react';
import { siteConfig } from '@/config/site';

const Achievements = () => {
  return (
    <section id="achievements" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
      <ul className="list-disc list-inside">
        {siteConfig.about.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
