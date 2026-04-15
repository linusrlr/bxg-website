import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Classes } from "@/components/classes";
import { Schedule } from "@/components/schedule";
import { Trainers } from "@/components/trainers";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { BeginnerFaq } from "@/components/beginner-faq";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero: Dark (photo bg) */}
        <Hero />
        {/* About: Light */}
        <About />
        {/* Benefits: Dark */}
        <Benefits />
        {/* Classes: Light */}
        <Classes />
        {/* Schedule: Dark */}
        <Schedule />
        {/* Trainers: Light */}
        <Trainers />
        {/* Testimonials: Dark */}
        <Testimonials />
        {/* Pricing: Light */}
        <Pricing />
        {/* FAQ: Dark */}
        <BeginnerFaq />
        {/* CTA: RED */}
        <CTA />
        {/* Contact: Light */}
        <Contact />
      </main>
      {/* Footer: Dark */}
      <Footer />
    </>
  );
}
