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
    <section id="about" className="section-light py-[clamp(80px,10vw,140px)] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image — full left column, bleeds visually with clip-path reveal */}
          <div className="lg:col-span-6 lg:-ml-5">
            <ClipReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/gym-training.jpeg"
                  alt="BXG Muay Thai gym interior"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Red accent top line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-bxg-red" />
              </div>
            </ClipReveal>
          </div>

          {/* Text — takes 6 of 12 cols */}
          <div className="lg:col-span-6">
            <FadeUp>
              <div className="section-label mb-3">Our Story</div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-[#0C0C0C]">
                MORE THAN A GYM.
                <br />
                <span className="text-bxg-red">A LEGACY REBORN.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#666] max-w-[560px] leading-[1.8] font-light mt-5">
                Founded as BXG Boxing &amp; Fitness in 2003, the gym was
                Singapore&apos;s home for Muay Thai for over two decades. When
                the original chapter closed in 2025, coaches Martin and
                Damien — who trained and grew up in the BXG system — opened{" "}
                <strong className="text-[#0C0C0C] font-medium">BXG Muay Thai Academy</strong>{" "}
                to carry the legacy forward. Same values. New chapter.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#666] max-w-[560px] leading-[1.8] font-light mt-4">
                Now at 260 Tanjong Katong Road, we run over 30 classes per
                week — from fundamentals and pad work to advanced application.
                Open 7 days a week for all skill levels.
              </p>
            </FadeUp>

            {/* Feature Grid — white bg with red left border on light section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((feat, i) => (
                <FadeUp key={feat.title} delay={0.35 + i * 0.08}>
                  <div className="py-4 pl-4 pr-3 bg-white border-l-[3px] border-bxg-red hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
                    <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.8rem] tracking-[1.5px] uppercase text-[#0C0C0C] mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-[0.82rem] text-[#666] leading-[1.6]">
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
