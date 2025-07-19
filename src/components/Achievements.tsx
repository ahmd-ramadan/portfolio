'use client'

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Collapsed from "./Collapsed";

const Achievements = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  
  return (
    <section id="achievements" className="my-8">
      <Collapsed
        title="Achievements & Certificates"
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
      />
      {/* <h2 className="text-lg md:text-2xl font-bold mb-4">Achievements & Certificates</h2> */}
      { !isCollapsed && <ul className="list-disc list-inside space-y-2 text-sm">
        <li>
          Solved over <strong>2500 problems</strong> on platforms like <span className="text-blue-600">Leetcode</span><Link 
            href="https://leetcode.com/u/ahmed__ramadan/" 
            target="_blank" 
            className="text"
            ><ExternalLink size={12} className="text-blue-600 inline-block mb-.5"/></Link>, <span className="text-blue-600">Codeforces</span><Link 
            href="https://codeforces.com/profile/AhmedRamadan" 
            target="_blank" 
            className="text"
            ><ExternalLink size={12} className="text-blue-600 inline-block mb-.5"/></Link>, and more, enhancing algorithmic thinking and coding skills.
        </li>
        <li>
          Participated three times in the <strong>ECPC qualification rounds</strong>, demonstrating strong competitive programming capabilities <span className="text-blue-600">Certificates</span><Link 
            href="https://drive.google.com/drive/folders/15QZBpfxJvMtyHoDCrxBoyCgZltmHM-9Z" 
            target="_blank" 
            className="text"
            ><ExternalLink size={12} className="text-blue-600 inline-block mb-.5"/></Link>.
        </li>
        <li>
          Reached <strong>Round 2 of the Meta Hacker Cup 2023</strong>, demonstrating strong problem-solving skills in competitive programming. <span className="text-blue-600">Certificates</span><Link 
            href="https://drive.google.com/file/d/1sxFzMYzBLnNv0vlv6-D0EeeY8syz4Pn-/view?usp=drive_link" 
            target="_blank" 
            className="text"
            ><ExternalLink size={12} className="text-blue-600 inline-block mb-.5"/></Link>
        </li>
      </ul> }
    </section>
  );
};

export default Achievements; 