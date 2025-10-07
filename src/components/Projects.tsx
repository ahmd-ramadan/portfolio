import Image from "next/image"
import Link from "next/link"
import GithubIcon from "./icons/Github"
import LinkedInIcon from "./icons/Linkedin"
import GlobleIcon from "./icons/Global"

const Projects = () => {
    
    return (
        <section id="projects">
          <div className="space-y-6 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                <h2 className="text-[10px]xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {/* Raha Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  {/* Placeholder for project image */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    {/* <span className="text-muted-foreground">Raha</span> */}
                    <Image
                        src="/projects/raha-banner.png" 
                        alt="raha"
                        // width={100}
                        // height={50}
                        objectFit="cover"
                        layout="fill"
                        // className="text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Raha</div>
                      <div className="flex flex-col gap-1 items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">Jun 2024 - Feb 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      <p>
                      Raha - راحة is a robust, bilingual e-commerce platform built for a seamless shopping experience in both Arabic and English. It features secure multi-role authentication, a dynamic vendor system, advanced product and inventory management, real-time order tracking, automated invoicing, and instant notifications. With a modern tech stack (Next.js, Express.js, MongoDB, Tailwind CSS, and more), Raha delivers a scalable, user-friendly solution for both customers and vendors. Developed as a freelance project, it showcases my expertise in building secure, scalable, and feature-rich web applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Javascript", "Nodejs", "Express", "MongodDB", "EJS", "Multer", "Cloudinary", "Sharp", "NodeMailer"].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                    {["Next.js", "Typescript", "TailwindCSS", "Redux", "Next-Intl", "Hyper UI", "Folwbite", "Headless UI", "", "Slick-Carousel", "..."].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://raha-furniture.com/" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                      <GlobleIcon width={15} height={15}/>Website
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://www.linkedin.com/posts/ahmd-ramadan_excited-to-share-my-latest-project-activity-7306032621791141889-Z37P" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-blue-100"
                    >
                      <LinkedInIcon width={15} height={15}/>Post
                    </Link>
                  </div>
                </div>
              </div>

              {/* Nafsia Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                    {/* <span className="text-muted-foreground">Nafsia</span> */}
                    <Image
                      src="/projects/nafsia-banner.png" 
                      alt="Titans"
                      // width={100}
                      // height={50}
                      objectFit="cover"
                      layout="fill"
                      // className="text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Nafsia</div>
                      <div className="flex flex-col gap-1 justify-end items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-[10px] w-fit ml-2 bg-amber-500/10 text-amber-700 hover:bg-amber-500/20 border-amber-500/50">Draft</div>
                        <time className="font-sans text-xs">Feb 2025 - June 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      {/* <p>Goaluxe turns your personal goals into a rewarding adventure by letting you choose your own incentives. Experience a tailor-made path to productivity that&apos;s as unique as you are.</p> */}
                      <p>Nafsia is a mental health support app created to break the stigma around mental health in Arab communities. The platform offers educational content from certified therapists, peer-to-peer support rooms, group therapy sessions, and a comprehensive therapist directory. Therapists benefit from professional tools to manage patient insights and grow their practice. As the backend developer, I built scalable, privacy-focused systems using TypeScript, Node.js, Express.js, and MongoDB. Nafsia aims to make mental healthcare accessible, safe, and judgment-free for everyone.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Typescript", "MongoDB", "Express.js", "Mongoose", "JWT", "+9 packages"].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://www.linkedin.com/posts/ahmd-ramadan_graduation-mentalhealth-techforgood-activity-7344365671176200192-lOis" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-blue-100"
                    >
                      <LinkedInIcon width={15} height={15}/>Post
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://github.com/ahmd-ramadan/Nafsia" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-gray-300"
                    >
                      <GithubIcon width={15} height={15}/>Source
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sufraa Al-Easha Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    {/* <span className="text-muted-foreground">Sufraa Al-Easha</span> */}
                    <Image
                      src="/projects/sufraa-al-easha-banner.png" 
                      alt="Sufraa Al-Easha"
                      // width={100}
                      // height={50}
                      objectFit="cover"
                      layout="fill"
                      // className="text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Sufraa Al-Easha</div>
                      <div className="flex flex-col gap-1 items-end">  
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">March 2025 - July 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      <p>Sufraa Al-Easha is a collaborative platform that connects Hajj campaigns, catering centers, suppliers, and charities. Campaigns can order ready-made meals from catering centers, while catering centers can purchase ingredients and products from suppliers. Both can easily donate surplus food and supplies to charities through the platform. Sufraa Al-Easha provides integrated payments, real-time notifications, and secure file storage, making the entire process of food procurement and charitable giving during Hajj more efficient and transparent.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["TypeScript", "Node.js", "Express.js", "MongoDB", "Bunny", "Paytabs", "Socket.io", "Nodemailer", "Zod", "..."].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://hajj-omrah-ui.vercel.app" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                      <GlobleIcon width={15} height={15}/>Website
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://www.linkedin.com/posts/ahmd-ramadan_nextjs-react-redux-activity-7381288380996710400-pD-l?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD53zUkBJzlhq757ysM0OvmstxmZtATuK4Y" 
                      className="dark:text-black flex items-center gap-1 rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/81 px-2 py-0.5 text-[10px] bg-blue-100"
                    >
                      <LinkedInIcon width={15} height={15}/>Post
                    </Link>
                  </div>
                </div>
              </div>

              {/* Al-kolood Company Profile Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                        <Image
                          src="/projects/al.kolood_banner.png" 
                          alt="Al Kolood Company"
                          // width={100}
                          // height={50}
                          objectFit="cover"
                          layout="fill"
                          // className="text-muted-foreground" 
                        />
                      {/* <span className="text-muted-foreground">Al-kolood</span> */}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Al-kolood Profile</div>
                      <div className="flex flex-col gap-1 items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">Octber 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Al.kolood profile is a Contracting Establishment portfolio website featuring a modern design and seamless user experience.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Typescript", "Vite", "React.js", "TailwindCSS", "Lucide-React", "Google Maps", "..."].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://al-kolood.netlify.app/" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                      <GlobleIcon width={15} height={15}/>Website
                    </Link>
                  </div>
                </div>
              </div>

              {/* Titans Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                        <Image
                          src="/projects/titans-banner.png" 
                          alt="Titans"
                          // width={100}
                          // height={50}
                          objectFit="cover"
                          layout="fill"
                          // className="text-muted-foreground" 
                        />
                      {/* <span className="text-muted-foreground">Titans</span> */}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Titans</div>
                      <div className="flex flex-col gap-1 items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">July 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>Titans is a business solutions company portfolio website featuring a modern design and seamless user experience. The site integrates with Google Sheets to efficiently handle form submissions and data management.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Next.js", "Typescript", "TailwindCSS", "Framer-Motion", "Lottiefiles", "Lucide-React", "Google Sheets", "..."].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://titans-iota.vercel.app/" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                        <GlobleIcon width={15} height={15}/>Website
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://github.com/ahmd-ramadan/titans" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-gray-300"
                    >
                      <GithubIcon width={15} height={15}/>Source
                    </Link>
                  </div>
                </div>
              </div>

              {/* AttendEase Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center">
                    {/* <span className="text-muted-foreground">AttendEase</span> */}
                    <Image
                      src="/projects/attend-ease.png" 
                      alt="Attend Ease"
                      // width={100}
                      // height={50}
                      objectFit="cover"
                      layout="fill"
                      // className="text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">AttendEase</div>
                      <div className="flex flex-col gap-1 items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">March 2025</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      <p>AttendEase is a fullstack application designed to help university professors accurately manage student attendance. It features geolocation verification to ensure students are present in the designated area and uses fingerprint.js to generate unique device identifiers, preventing multiple students from signing in on the same device. This solution streamlines attendance tracking and enhances academic integrity.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Typescript", "Next.js", "Tailwind CSS", "Hyper UI", "MongoDB", "fingerprintjs"].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" 
                      href="https://attend-ease-lilac.vercel.app/" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                      <GlobleIcon width={15} height={15}/>Website
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://github.com/ahmd-ramadan/AttendEase" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-gray-300"
                    >
                      <GithubIcon width={15} height={15}/>Source
                    </Link>
                  </div>
                </div>
              </div>

              {/* Natiga Project */}
              <div className="bg-[var(--background)] shadow-lg  border-none rounded-xl text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
                <div className="h-40 w-full overflow-hidden object-cover object-top bg-muted">
                  <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center">
                    {/* <span className="text-muted-foreground">AttendEase</span> */}
                    <Image
                      src="/projects/natiga-banner.png" 
                      alt="Attend Ease"
                      // width={100}
                      // height={50}
                      objectFit="cover"
                      layout="fill"
                      // className="text-muted-foreground" 
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-semibold tracking-tight mt-1 text-base">Natiga</div>
                      <div className="flex flex-col gap-1 items-end">
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow text-[10px] ml-2 bg-green-500/20 text-green-700 hover:bg-green-500/30 border-green-500/50">Published</div>
                        <time className="font-sans text-xs">Nov 2024</time>
                      </div>
                    </div>
                    <div className="pt-2 prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      <p>Natiga is a fullstack application designed for educational centers to efficiently publish and manage students’ exam results. The platform leverages xlsx.js to seamlessly import grade files and store them in a database, making results easily accessible for students and administrators.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto flex flex-col px-2">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {["Typescript", "Node.js", "Express.js", "Next.js", "Tailwind CSS", "MongoDB", "XLSX"].map(tag => (
                      <div key={tag} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-6 pt-0 px-2 pb-2">
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    <Link 
                      target="_blank" href="https://natiga-ecru.vercel.app/" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-green-100"
                    >
                      <GlobleIcon width={15} height={15}/>Website
                    </Link>
                    <Link 
                      target="_blank" 
                      href="https://github.com/ahmd-ramadan/Natiga" 
                      className="dark:text-black items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-0.5 text-[10px] bg-gray-300"
                      >
                      <GithubIcon width={15} height={15}/>Source
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-1 rounded-md border-l-1 px-2 py-0.5 border-blue-400">
              <p className="text-sm font-semibold">
                The projects above showcase my work for clients and as templates for client solutions. For more of my practice projects and coding tasks, feel free to visit my <Link href="https://github.com/ahmd-ramadan" target="blank" className="text-blue-500">GitHub</Link>.
              </p>
            </div>
          </div>
        </section>
    )
}

export default Projects