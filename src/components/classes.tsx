"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const classes = [
  {
    badge: "Fundamentals",
    badgeColor: "#2ECC71",
    title: "MUAY THAI FUNDAMENTALS & FITNESS CIRCUITS",
    desc: "Master the core techniques of Muay Thai combined with high-intensity fitness circuits. Perfect for beginners and those building their striking foundation.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    badge: "Technique",
    badgeColor: "#8E44AD",
    title: "MUAY THAI PAD WORK SESSION",
    desc: "Focused pad work training to sharpen your striking accuracy, timing, and combinations. Work directly with coaches and training partners on Thai pads.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    badge: "Advanced",
    badgeColor: "#E67E22",
    title: "ADVANCED MUAY THAI APPLICATION",
    desc: "Fight strategies, sparring, clinch work, and advanced techniques. For serious practitioners ready to compete or master the art at the highest level.",
    duration: "60 min",
    level: "Experienced",
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-[clamp(56px,8vw,110px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <FadeUp className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="section-label">Our Programs</div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
              FIND YOUR LEVEL
            </h2>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] border border-white/20 hover:border-bxg-red hover:text-bxg-red transition-all mb-1"
          >
            Book a Class &rarr;
          </a>
        </FadeUp>

        {/* Cards with 3D hover */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls) => (
            <motion.div
              key={cls.title}
              variants={staggerItem}
              whileHover={{
                y: -4,
                boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
              }}
              className="bg-bxg-dark-2 overflow-hidden group"
              style={{ perspective: "1000px" }}
            >
              {/* Card Image Area */}
              <div className="aspect-[5/3] bg-bxg-dark-3 relative flex items-center justify-center overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className="absolute top-3 left-3 font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.6rem] tracking-[2px] uppercase px-3 py-[5px] text-white"
                  style={{ background: cls.badgeColor }}
                >
                  {cls.badge}
                </span>
                <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.65rem] tracking-[2px] uppercase text-[#666]">
                  Class Photo
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-bebas)] text-[1.35rem] tracking-[1px] text-white mb-2">
                  {cls.title}
                </h3>
                <p className="text-[0.82rem] text-[#999] leading-[1.65] mb-4">
                  {cls.desc}
                </p>
                <div className="flex gap-4 pt-3 border-t border-white/6 font-[family-name:var(--font-barlow-condensed)] text-[0.7rem] tracking-[1px] uppercase text-[#666]">
                  <span>⏱ {cls.duration}</span>
                  <span>📊 {cls.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
