'use client'

import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Collapsed from "./Collapsed";
import { useState } from "react";

const Cources = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <section id="cources">
            <Collapsed
                title="Cources"
                isCollapsed={isCollapsed}
                onToggle={() => setIsCollapsed((prev) => !prev)}
            />
            {/* <h2 className="text-xl font-bold">Cources</h2> */}

            { !isCollapsed && <div className="rounded-xl border bg-card text-card-foreground flex py-4 !bg-transparent border-none shadow-none">
                <section className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <Image src="/iti.png" alt="Thebes Academy" width={48} height={48} className="flex h-full w-full items-center justify-center rounded-full bg-muted" />
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
                                    <strong> Information TechnologyInstitute (ITI)</strong>
                                </Link>
                            </h3>
                            <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">July 2023 - Aug 2023</time>
                        </div>
                        <p className="font-sans text-xs text-muted-foreground mt-1 ml-1">Summer Training in MERN Stack Minia, EG</p>
                        <div 
                            className="flex gap-1 items-center"
                        >
                            <Link
                                className="inline-flex items-center hover:opacity-80 text-sm text-blue-600" 
                                href="https://drive.google.com/drive/folders/1HJ21o2sjLpRvTC43ljcrqbmcFP2ac4HZ?usp=drive_link"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Certificates
                            </Link>
                            <ExternalLink size={12} className="text-blue-600"/>
                        </div>
                    </div>
                </section>

                {/* <section className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <Image 
                            src="/udemy.png" 
                            alt="Thebes Academy" 
                            width={48} height={48} 
                            className="flex h-full w-full items-center justify-center rounded-full bg-muted" />
                    </span>
                </section>
                <section className="flex-grow ml-4 flex flex-col group">
                    <div className="flex flex-col space-y-1.5 p-0">
                        <div className="flex items-center justify-between gap-x-2">
                        <h3 className="inline-flex items-center gap-x-1 font-semibold text-xs sm:text-sm">
                            <Link 
                                className="inline-flex items-center hover:opacity-80" 
                                href="https://www.facebook.com/minia.fci" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <strong> Information TechnologyInstitute (ITI)</strong>
                            </Link>
                        </h3>
                        <time className="text-xs sm:text-sm tabular-nums text-muted-foreground">July 2023 - Aug 2023</time>
                        </div>
                        <p className="font-sans text-xs text-muted-foreground mt-1 ml-1">Summer Training in MERN Stack Minia, EG</p>
                        <div 
                            className="flex gap-1 items-center"
                        >
                            <Link
                                className="inline-flex items-center hover:opacity-80 text-sm text-blue-600" 
                                href="https://drive.google.com/drive/folders/1HJ21o2sjLpRvTC43ljcrqbmcFP2ac4HZ?usp=drive_link"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Certificates
                            </Link>
                            <ExternalLink size={12} className="text-blue-600"/>
                        </div>
                    </div>
                </section> */}
            </div> }
        </section>
    )
}

export default Cources