
import React from 'react';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project) => (
          <div key={project.name} className="rounded-lg card-shadow p-6 bg-card">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Project Links */}
            {project.links && (
              <div className="flex space-x-4 mt-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Icons.github className="h-6 w-6" />
                  </a>
                )}
                {project.links.deployment && (
                  <a
                    href={project.links.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label={`View ${project.name} Deployment`}
                  >
                    <Icons.externalLink className="h-6 w-6" />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

    