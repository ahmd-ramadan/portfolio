'use client'

import { useState } from "react";
import Collapsed from "./Collapsed";

const Skills = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="skills">
          {/* <h2 className="text-xl font-bold">Skills</h2> */}
          <Collapsed
            title="Skills"
            isCollapsed={isCollapsed}
            onToggle={() => setIsCollapsed((prev) => !prev)}
          />
          { !isCollapsed && <div className="flex flex-wrap gap-1">
             {/* Backend */}
             <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-primary">backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "GraphQL", "REST APIs", "WebSockets", "Microservices", "Socket.io"].map(skill => (
                  <div key={skill} className="text-[12px] shadow-sm shadow-blue-300 inline-flex items-center text-secondary-foreground px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-primary">frontend</h3>
              <div className="flex flex-wrap gap-2">
                {/* {["React", "Next.js", "Astro", "TypeScript", "JavaScript", "Apollo Client", "TanStack Query", "Zustand", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Shadcn UI", "Framer Motion", "GSAP"].map(skill => (
                  <div key={skill} className="inline-flex items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))} */}
                {["React", "Next.js", "TypeScript", "JavaScript", "Zustand", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Shadcn UI", "Framer Motion"].map(skill => (
                  <div key={skill} className="text-[12px] shadow-sm shadow-blue-300 inline-flex items-center text-secondary-foreground px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-primary">database</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "PostgreSQL", "Redis", "Prisma", "MySQL", "Orcale"].map(skill => (
                  <div key={skill} className="text-[12px] shadow-sm shadow-blue-300 dark:shadow-white inlinearent bg-secondary text-seer:bg-secondary/80 px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-primary">devops</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Git", "CI/CD"].map(skill => (
                  <div key={skill} className="text-[12px] shadow-sm shadow-blue-300 dark:shadow-white inlinearent bg-secondary text-seer:bg-secondary/80 px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))}
              </div>
            </div>

            {/* Testing */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-primary">testing</h3>
              <div className="flex flex-wrap gap-2">
                {["Jest", "React Testing Library", "Cypress"].map(skill => (
                  <div key={skill} className="text-[12px] shadow-sm shadow-blue-300 dark:shadow-white inlinearent bg-secondary text-seer:bg-secondary/80 px-3 py-1.5 text-sm font-medium transition-colors">{skill}</div>
                ))}
              </div>
            </div>
          </div> }
        </section>
    )
}

export default Skills