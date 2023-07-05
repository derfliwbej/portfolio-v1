import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Links from "@/components/links";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-3 md:px-28 lg:px-28">
        <Hero />
        <Skills />
        <Experiences />
      </div>
      <Links />
    </main>
  );
}