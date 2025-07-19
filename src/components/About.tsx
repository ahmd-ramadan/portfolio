'use client'

import { useState } from "react";
import Collapsed from "./Collapsed";

const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <section id="about">
      <Collapsed
        title="About"
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
      />

      {!isCollapsed && (
        <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          <p>
            Resourceful and passionate Computer Science graduate and aspiring Software Engineer specializing in full-stack development, with expertise in both front-end and back-end systems. Skilled at designing user-friendly websites, building efficient databases, and ensuring seamless integration between interfaces and server-side logic. I focus on intuitive user experiences, data-driven insights, and delivering high-quality software solutions tailored to client needs. I am passionate about competitive programming and problem-solving, with a proven track record of tackling complex challenges. Continuously learning and staying updated with industry trends and best practices, I strive to deliver innovative and efficient solutions.
          </p>
        </div>
      )}
    </section>
  );
};

export default About;