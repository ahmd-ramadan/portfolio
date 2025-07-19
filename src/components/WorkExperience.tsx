'use client'

import Image from "next/image"
import { useState } from "react";
import Collapsed from "./Collapsed";

const WorkExperience = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="work">
            {/* <h2 className="text-xl font-bold">Work Experience</h2> */}
            <Collapsed
                title="Work Experience"
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed((prev) => !prev)}
            />
            { !isCollapsed && <div className="space-y-4">
                {/* NinjaBages */}
                <div className="rounded-xl border bg-card text-card-foreground flex py-4 !bg-transparent border-none shadow-none">
                <section className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <Image src="/ninjabages.png" alt="NinjaBages" width={48} height={48} className="flex h-full w-full items-center justify-center rounded-full bg-muted" />
                    </span>
                </section>
                <section className="flex-grow ml-4 flex flex-col group">
                    <div className="flex flex-col space-y-1.5 p-0">
                    <div className="flex items-center justify-between gap-x-2">
                        <h3 className="inline-flex items-center gap-x-1 font-semibold text-xs sm:text-sm">
                        <a className="inline-flex items-center hover:opacity-80" href="https://ninjapages.com.br/?fbclid=PAZXh0bgNhZW0CMTEAAadYMI9U9bHO7xMY9o71E0w8ck1S7PMjHOQcoGMscZI_k35rqCe4xriGHesIoQ_aem_jJxg7o2hTQq9-_vNsu2Zbw" target="_blank" rel="noopener noreferrer">NinjaBages</a>
                        </h3>
                        <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">June 2024 - October 2024</time>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground mt-1">Front-end Developer</p>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm">
                    Spearheaded the development and optimization of static HTML pages using Tailwind CSS, crafting scalable templates for a pre-existing page builder. Integrated dynamic UI components with rigorous testing to ensure compatibility within the builder. Boosted page load speed by 20%, enhancing overall responsiveness. Improved template customization features, driving a 15% increase in user satisfaction based on platform feedback.
                    </div>
                </section>
                </div>

                {/* Durratalqatif */}
                <div className="rounded-xl border bg-card text-card-foreground flex py-4 !bg-transparent border-none shadow-none">
                <section className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                    <Image src="/durratalqatif.png" alt="Durratalqatif" width={48} height={48} className="flex h-full w-full items-center justify-center rounded-full bg-muted" />
                    </span>
                </section>
                <section className="flex-grow ml-4 flex flex-col group">
                    <div className="flex flex-col space-y-1.5 p-0">
                    <div className="flex items-center justify-between gap-x-2">
                        <h3 className="inline-flex items-center gap-x-1 font-semibold text-xs sm:text-sm">
                        <a className="inline-flex items-center hover:opacity-80" href="https://durratalqatif.com/" target="_blank" rel="noopener noreferrer">Durratalqatif</a>
                        </h3>
                        <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">August 2023 - December 2023</time>
                    </div>
                    <p className="font-sans text-xs text-muted-foreground mt-1">Front-end Developer</p>
                    </div>
                    <div className="mt-2 text-xs sm:text-sm">
                    Built an interactive, user-centric auction dashboard with React. Collaborated with cross-functional teams to boost performance and responsiveness across devices. Reduced page render time by 30% via React component optimization and lazy loading. Enhanced UI design and features, resulting in a 10% uptick in user engagement.
                    </div>
                </section>
                </div>
            </div> }
        </section>
    )
}

export default WorkExperience