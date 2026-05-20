import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Network } from "@/components/sections/Network";
import { Telemedicine } from "@/components/sections/Telemedicine";
import { Specialists } from "@/components/sections/Specialists";
import { HealthExperience } from "@/components/sections/HealthExperience";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { HomeWrapper } from "./HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <div className="flex min-h-0 flex-1 flex-col bg-white">
        <Navigation />
        <main id="main-content" className="min-h-0 flex-1">
          <Hero />
          <About />
          <HealthExperience />
          <Network />
          <Telemedicine />
          <Specialists />
          <Contact />
          <Blog />
        </main>
        <Footer />
      </div>
    </HomeWrapper>
  );
}
