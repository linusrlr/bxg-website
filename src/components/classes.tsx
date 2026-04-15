"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const classes = [
  {
    badge: "Fundamentals",
    borderColor: "#2ECC71",
    title: "FUNDAMENTALS & FITNESS CIRCUITS",
    desc: "Master the core techniques of Muay Thai combined with high-intensity fitness circuits. Perfect for beginners and those building their striking foundation.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    badge: "Technique",
    borderColor: "#8E44AD",
    title: "PAD WORK SESSION",
    desc: "Focused pad work training to sharpen your striking accuracy, timing, and combinations. Work directly with coaches and training partners on Thai pads.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    badge: "Advanced",
    borderColor: "#E67E22",
    title: "ADVANCED APPLICATION",
    desc: "Fight strategies, sparring, clinch work, and advanced techniques. For serious practitioners ready to compete or master the art at the highest level.",
    duration: "60 min",
    level: "Experienced",
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <FadeUp className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="section-label">Our Programs</div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-white">
              FIND YOUR LEVEL
            </h2>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[14px] border border-white/15 hover:border-bxg-red hover:text-bxg-red transition-all mb-1"
          >
            Book a Class
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </FadeUp>

        {/* Typography-driven Cards — no image placeholders */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {classes.map((cls) => (
            <motion.div
              key={cls.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="bg-bxg-dark-2 overflow-hidden group relative transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
              style={{ borderLeft: `3px solid ${cls.borderColor}` }}
            >
              <div className="p-8">
                {/* Badge */}
                <span
                  className="inline-block font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.6rem] tracking-[2.5px] uppercase px-3 py-[5px] mb-6"
                  style={{
                    color: cls.borderColor,
                    background: `${cls.borderColor}15`,
                  }}
                >
                  {cls.badge}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-bebas)] text-[1.6rem] tracking-[1.5px] text-white mb-3 leading-[1.1]">
                  {cls.title}
                </h3>

                {/* Description */}
                <p className="text-[0.85rem] text-[#888] leading-[1.7] mb-6">
                  {cls.desc}
                </p>

                {/* Meta */}
                <div className="flex gap-6 pt-4 border-t border-white/6">
                  <div className="flex items-center gap-2">
                    <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.72rem] tracking-[1.5px] uppercase text-[#666]">
                      {cls.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[3px] h-[3px] rounded-full bg-white/30" />
                    <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.72rem] tracking-[1.5px] uppercase text-[#666]">
                      {cls.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
