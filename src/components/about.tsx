"use client";

import Image from "next/image";
import { FadeUp, ClipReveal } from "@/lib/motion";

const features = [
  { title: "22 Years of Heritage", desc: "Authentic Thai training methodology passed down through decades." },
  { title: "All Skill Levels", desc: "Structured progression from basics to competition readiness." },
  { title: "National Fighters", desc: "Home to Singapore national team athletes." },
  { title: "Community First", desc: "A tight-knit gym culture where everyone grows together." },
];

export function About() {
  return (
    <section id="about" className="py-[clamp(56px,8vw,110px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          {/* Image */}
          <ClipReveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-bxg-dark-2">
              <Image
                src="/images/gym-training.jpeg"
                alt="BXG Muay Thai gym interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 font-[family-name:var(--font-bebas)] text-[4rem] text-bxg-red/12 leading-none">
                2003
              </div>
              {/* Red accent line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-bxg-red" />
            </div>
          </ClipReveal>

          {/* Text */}
          <div>
            <FadeUp>
              <div className="section-label mb-2.5">Our Story</div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
                MORE THAN A GYM.
                <br />
                A LEGACY REBORN.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] max-w-[560px] leading-[1.7] font-light mt-4">
                Founded in 2003 as BXG Boxing & Fitness, we&apos;ve been
                Singapore&apos;s home for authentic Muay Thai for over two decades.
                Now reborn as{" "}
                <strong className="text-white">BXG Muay Thai Academy</strong>,
                our members stepped up to carry the legacy forward — with fresh
                energy, a new name, and the same uncompromising standards.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] max-w-[560px] leading-[1.7] font-light mt-3">
                Led by coaches Martin and Damien, we run over 30 classes per
                week — from fundamentals and pad work to advanced application.
                Located in the heart of Tanjong Katong, 7 days a week.
              </p>
            </FadeUp>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feat, i) => (
                <FadeUp key={feat.title} delay={0.3 + i * 0.1}>
                  <div className="p-4 bg-bxg-dark-2 border-l-2 border-bxg-red">
                    <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.78rem] tracking-[1.5px] uppercase text-white mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-[0.8rem] text-[#999] leading-[1.55]">
                      {feat.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
