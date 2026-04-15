"use client";

import { FadeUp } from "@/lib/motion";

const features = [
  { title: "22 Years of Heritage", desc: "Authentic Thai training methodology passed down through decades." },
  { title: "All Skill Levels", desc: "Structured progression from basics to competition readiness." },
  { title: "National Fighters", desc: "Home to Singapore national team athletes." },
  { title: "Community First", desc: "A tight-knit gym culture where everyone grows together." },
];

export function About() {
  return (
    <section id="about" className="section-light relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Typographic Graphic Panel — replaces duplicate photo */}
        <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[700px] bg-[#0C0C0C] overflow-hidden flex items-center justify-center">
          {/* Oversized BXG watermark */}
          <span
            className="absolute font-[family-name:var(--font-bebas)] text-[20vw] lg:text-[14vw] leading-none tracking-[0.04em] text-white/[0.04] select-none pointer-events-none"
            aria-hidden="true"
          >
            BXG
          </span>

          {/* Vertical red accent line */}
          <div className="absolute left-[15%] top-[10%] bottom-[10%] w-[3px] bg-bxg-red/30" />

          {/* Content cluster */}
          <div className="relative z-10 text-center lg:text-left lg:pl-[20%] px-6">
            <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[5px] uppercase text-white/30 mb-3">
              Established
            </div>
            <div className="font-[family-name:var(--font-bebas)] text-bxg-red text-[clamp(2.5rem,6vw,4.5rem)] tracking-[6px] leading-none">
              EST. 2003
            </div>
            <div className="mt-6 flex items-baseline gap-3 justify-center lg:justify-start">
              <span className="font-[family-name:var(--font-bebas)] text-[clamp(3.5rem,8vw,6rem)] leading-none text-white/90">
                22<span className="text-bxg-red">+</span>
              </span>
              <span className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[3px] uppercase text-white/40">
                Years of<br />Muay Thai
              </span>
            </div>
          </div>

          {/* Red accent stripe at right edge (desktop only) */}
          <div className="absolute top-0 right-0 w-[4px] h-full bg-bxg-red hidden lg:block" />
        </div>

        {/* Text */}
        <div className="py-[clamp(40px,8vw,100px)] px-[clamp(20px,4vw,80px)]">
          <FadeUp>
            <div className="section-label mb-3" style={{ color: "#E31B23" }}>
              <span className="inline-block w-6 h-[2px] bg-bxg-red mr-2.5" />
              Our Story
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-[#0C0C0C]">
              MORE THAN A GYM.
              <br />
              <span className="text-bxg-red">A LEGACY REBORN.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(0.9rem,2.5vw,1.02rem)] text-[#555] max-w-[520px] leading-[1.8] font-light mt-5">
              Founded as BXG Boxing &amp; Fitness in 2003, the gym was
              Singapore&apos;s home for Muay Thai for over two decades. When
              the original chapter closed in 2025, coaches Martin and
              Damien — who trained and grew up in the BXG system — opened{" "}
              <strong className="text-[#0C0C0C] font-medium">
                BXG Muay Thai Academy
              </strong>{" "}
              to carry the legacy forward. Same values. New chapter.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-[clamp(0.9rem,2.5vw,1.02rem)] text-[#555] max-w-[520px] leading-[1.8] font-light mt-4">
              Now at 260 Tanjong Katong Road, we run over 30 classes per
              week — from fundamentals and pad work to advanced application.
              Open 7 days a week for all skill levels.
            </p>
          </FadeUp>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {features.map((feat, i) => (
              <FadeUp key={feat.title} delay={0.35 + i * 0.08}>
                <div className="py-3 pl-4 pr-3 bg-white/60 border-l-[3px] border-bxg-red">
                  <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.78rem] tracking-[1.5px] uppercase text-[#0C0C0C] mb-0.5">
                    {feat.title}
                  </h4>
                  <p className="text-[0.8rem] text-[#666] leading-[1.55]">
                    {feat.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
