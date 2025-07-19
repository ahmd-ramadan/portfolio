'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import Collapsed from "./Collapsed";

const Education = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="education">
            {/* <h2 className="text-xl font-bold">Education</h2> */}
            <Collapsed
                title="Education"
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed((prev) => !prev)}
            />
            { !isCollapsed && <div className="rounded-xl border bg-card text-card-foreground flex py-4 !bg-transparent border-none shadow-none">
                <section className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <Image src="/fci.png" alt="Thebes Academy" width={48} height={48} className="flex h-full w-full items-center justify-center rounded-full bg-muted" />
                    </span>
                </section>
                <section className="flex-grow ml-4 flex flex-col group">
                    <div className="flex flex-col space-y-1.5 p-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2">
                            <h3 className="inline-flex items-center gap-x-1 font-semibold text-xs sm:text-sm">
                                <Link 
                                    className="inline-flex items-center hover:opacity-80" 
                                    href="https://www.facebook.com/minia.fci" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <strong>Minia University</strong>, Computer Science
                                </Link>
                            </h3>
                            <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">Sept 2021 - June 2025</time>
                        </div>
                        <p className="font-sans text-xs text-muted-foreground mt-1 ml-1">Graduated from computer science Minia, EG</p>
                    </div>
                </section>
            </div> }
        </section>
    )
}

export default Education