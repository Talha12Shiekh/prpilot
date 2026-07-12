import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TargetUsers } from "./components/TargetUsers";
import { FutureSection } from "./components/FutureSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <TargetUsers />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
}
