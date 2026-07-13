import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { TargetUsers } from "./components/TargetUsers";
import { FeatureSections } from "./components/FeatureSections";
import { Architecture } from "./components/Architecture";
import { FutureSection } from "./components/FutureSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <HowItWorks />
        <TargetUsers />
        <FeatureSections />
        <Architecture />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
}
