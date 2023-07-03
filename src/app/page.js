import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Links from "@/components/links";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-10 md:px-28 lg:px-28">
        <Hero />
        <Skills />
      </div>
      <Links />
    </main>
  );
}