"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const benefits = [
  { icon: "⚡", title: "TOTAL BODY CONDITIONING", desc: "Burn up to 1,000 calories per session. Build functional strength, explosive power, and cardiovascular endurance." },
  { icon: "🧠", title: "MENTAL TOUGHNESS", desc: "Push past your limits every round. Build focus, discipline, and resilience that carries beyond the ring." },
  { icon: "🛡️", title: "REAL SELF-DEFENSE", desc: "Learn practical striking using all eight limbs — fists, elbows, knees, and shins." },
  { icon: "🔥", title: "STRESS DESTRUCTION", desc: "Channel stress into power. Leave the gym feeling lighter, sharper, and completely recharged." },
  { icon: "🤝", title: "COMMUNITY", desc: "Train with a tribe of like-minded people. From beginners to national competitors — everyone belongs." },
  { icon: "📈", title: "CLEAR PROGRESSION", desc: "Structured curriculum from fundamentals through pad work to advanced application and competition." },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-[clamp(56px,8vw,110px)] bg-bxg-dark">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <FadeUp className="text-center max-w-[600px] mx-auto mb-12">
          <div className="section-label justify-center before:hidden">
            Why Muay Thai
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white mt-2">
            THE ART OF EIGHT LIMBS
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] leading-[1.7] font-light mt-3 mx-auto">
            Muay Thai isn&apos;t just a workout — it&apos;s a complete system
            that strengthens your body, sharpens your mind, and builds unshakable
            confidence.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="group bg-bxg-dark-2 p-9 relative overflow-hidden transition-all duration-300"
            >
              {/* Top line animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-bxg-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

              <div className="w-[42px] h-[42px] bg-bxg-red/10 flex items-center justify-center text-xl mb-[18px]">
                {b.icon}
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-[1.35rem] tracking-[1px] text-white mb-2">
                {b.title}
              </h3>
              <p className="text-[0.85rem] text-[#999] leading-[1.65]">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
