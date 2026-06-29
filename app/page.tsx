import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-white">
      <Background />
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}