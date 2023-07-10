import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Links from "@/components/links";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: '500'
});

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-3 md:px-28 lg:px-28">
        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </div>
      <Links />
      <div className="text-center text-sm py-5">
        <p className={poppins.className}>Built by Jeb Panganiban 2023</p>
      </div>
    </main>
  );
}