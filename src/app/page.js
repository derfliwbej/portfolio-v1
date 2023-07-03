import Nav from "@/components/nav";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-10 md:px-28 lg:px-28">
        <Hero />
      </div>
    </main>
  );
}