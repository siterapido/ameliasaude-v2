import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Network } from "@/components/sections/Network";
import { Telemedicine } from "@/components/sections/Telemedicine";
import { Specialists } from "@/components/sections/Specialists";
import { Plans } from "@/components/sections/Plans";
import { FamilyPlan } from "@/components/sections/FamilyPlan";
import { Testimonials } from "@/components/sections/Testimonials";
import { Collective } from "@/components/sections/Collective";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <Navigation />
      <main id="main-content" className="min-h-0 flex-1">
        <Hero />
        <Network />
        <Telemedicine />
        <Specialists />
        <Plans />
        <FamilyPlan />
        <Testimonials />
        <Collective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
