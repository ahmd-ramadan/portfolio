'use client'

import Image from "next/image";
import { useState } from "react";
import Collapsed from "./Collapsed";

const Gallery = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="life-in-squares">
            {/* <h2 className="text-xl font-bold">Life in Squares</h2> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4 auto-rows-[180px]">
                {/* Placeholder squares, replace with real images/content if needed */}
                <Collapsed
                    title="Gallery"
                    isCollapsed={isCollapsed}
                    onToggle={() => setIsCollapsed((prev) => !prev)}
                />
                {!isCollapsed && Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="animate-pulse bg-primary/10 relative overflow-hidden rounded-xl shadow-md col-span-2 md:col-span-2" style={{ height: '100%', width: '100%' }}>
                        <Image 
                            src={`/image-${i + 1}.jpg`}
                            alt="My image"
                            objectFit="cover"
                            layout="fill"
                        />  
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;