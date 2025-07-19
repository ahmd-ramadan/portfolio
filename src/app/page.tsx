import About from "@/components/About";
import Contact from "@/components/Contact";
import Cources from "@/components/Cources";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="pattern-background z-100 min-h-screen font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6">
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        {/* Dashboard Btns */}
        <Dashboard />
        
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Life in Squares Section */}
        {/* <Gallery /> */}

        {/* Work Experience Section */}
        {/* <WorkExperience /> */}

        {/* Education Section */}
        <Education />

        {/* Cources Section */}
        <Cources />

        {/* Skills Section */}
        <Skills />

        {/* Achievements Section */}
        <Achievements />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
