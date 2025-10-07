"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Home, Moon, Sun } from "lucide-react";
import Link from "next/link";
import GithubIcon from "./icons/Github";

const Dashboard = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    return (
        <div 
            className="pointer-events-none fixed z-30 mx-auto flex
                       right-4 top-1/2 -translate-y-1/2 flex-col
                       md:bottom-4 md:top-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-0 md:flex-row md:right-auto"
        >
            <div 
                className="fixed h-16 w-full bg-transparent to-transparent  [-webkit-mask-image:linear-gradient(to_top,black,transparent)]
                          bottom-0 inset-x-0
                          md:block"
            ></div>
            <div 
                className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
                          flex-col py-2
                          md:flex-row md:py-1 md:px-2"
            >
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{ width: "40px" }}>
                    <Link 
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12" data-state="closed" href="/"
                    >
                        <Home size={16}/>
                    </Link>
                </div>
                {/* <div 
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}
                >
                    <Link 
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full size-12" data-state="closed" href="/blog"
                    >
                        <Book size={16}/>
                    </Link>
                </div> */}
                <div 
                    data-orientation="vertical" 
                    role="none" 
                    className="shrink-0 bg-border w-[1px] h-full md:w-[1px] md:h-full"
                >
                </div>
                <div 
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full" 
                    style={{width: "40px"}}
                >
                    <div 
                        role="link" 
                        tabIndex={0}
                    >
                        <Link 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full size-12 transition-colors duration-200 hover:bg-accent" aria-label="Visit GitHub" data-state="closed" 
                            href="https://github.com/ahmd-ramadan"
                        >
                            <GithubIcon width={16} height={16}/>
                        </Link>
                    </div>
                </div>
                <div 
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full" 
                    style={{width: "40px"}}
                >
                    <div 
                        role="link" 
                        tabIndex={0}
                    >
                        <Link 

                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full size-12 transition-colors duration-200 hover:bg-accent" aria-label="Visit Whatsapp" data-state="closed" 
                            href="https://wa.me/201020187993"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4 transition-transform duration-200 hover:scale-110" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div 
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full" 
                    style={{width: "40px"}}
                >
                    <div 
                        role="link" 
                        tabIndex={0}
                    >
                        <Link 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full size-12 transition-colors duration-200 hover:bg-accent" aria-label="Visit LinkedIn" data-state="closed" 
                            href="https://www.linkedin.com/in/ahmd-ramadan/"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-200 hover:scale-110"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}>
                    <div role="link" tabIndex={0}>
                        <Link 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full size-12 transition-colors duration-200 hover:bg-accent" 
                            aria-label="Visit instagram" 
                            data-state="closed" 
                            href="https://www.instagram.com/ahmdramadaan/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-200 hover:scale-110"><title>instagram</title><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </Link>
                    </div>
                </div>
                <div 
                    className="flex aspect-square cursor-pointer items-center justify-center rounded-full" 
                    style={{width: "40px"}}
                >   
                    <div 
                        role="link" 
                        tabIndex={0}
                    >
                        <Link 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground rounded-full size-12 transition-colors duration-200 hover:bg-accent" aria-label="Visit email" data-state="closed" 
                            href="mailto:ahmd.ramadaan@outlook.com?subject=Let's%20Connect&amp;body=Hi%20Ahmed%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%20Here's%20what%20I'd%20like%20to%20discuss%3A%0D%0A%0D%0A%5BPlease%20describe%20your%20project%2C%20collaboration%20idea%2C%20or%20question%5D%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%2C%0D%0A%5BYour%20Name%5D"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 hover:scale-110"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div 
                    data-orientation="vertical" 
                    role="none" 
                    className="shrink-0 bg-border w-[1px] h-full py-2 md:w-[1px] md:h-full md:py-0"
                ></div>
                {mounted && (
                    <div 
                        className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{width: "40px"}}
                    >
                        <button 
                            onClick={toggleTheme}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2" 
                            type="button"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? (
                                <Moon size={16} />
                            ) : (
                                <Sun size={16} />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard