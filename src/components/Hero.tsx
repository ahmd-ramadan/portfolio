import Image from "next/image";
import Link from "next/link";


const Hero = () => {

    const imagePath = "/me.jpg"

    return (
        <section id="hero">
            <div className="mx-auto w-full space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <div className="flex">
                            <span className="custom-font inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Hi, I&apos;m Ahmed 👋
                            </span>
                        </div>
                        <div className="max-w-[600px] md:text-xl">
                            Fullstack dev crafting sleek UIs and solving real-world problems — always building, always learning. Let&apos;s connect on
                            <Link
                                className="text-blue-500 hover:underline ml-1" 
                                target="_blank" rel="noopener noreferrer" 
                                href="https://www.linkedin.com/in/ahmd-ramadan/"
                                >
                                    LinkedIn
                            </Link>.
                        </div>
                    </div>
                    <div>
                        <span className="relative flex shrink-0 overflow-hidden rounded-full size-32 border">
                            <Image 
                                src={imagePath} 
                                alt="Ahmed Ramadan" 
                                width={128} 
                                height={128} 
                                className="flex h-full w-full items-center justify-center rounded-full bg-muted" 
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;