"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const testimonials = [
  {
    text: "I walked in as a complete beginner. Six months later, I've lost 12kg, gained serious confidence, and I actually look forward to training every single day.",
    name: "Mark K.",
    detail: "Beginner → Intermediate",
    initials: "MK",
  },
  {
    text: "As an expat, BXG became my second home. The coaches are incredibly skilled but also genuinely welcoming. Best community I've found in Singapore.",
    name: "Jessica L.",
    detail: "Expat · 1 year member",
    initials: "JL",
  },
  {
    text: "I've trained at gyms across Southeast Asia. BXG's coaching quality and legacy is something special — you feel the authenticity from your very first session.",
    name: "Ryan T.",
    detail: "Advanced · Competition Team",
    initials: "RT",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-[clamp(56px,8vw,110px)]"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Members Say</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
            REAL STORIES
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="bg-bxg-dark-2 p-8 border-t-2 border-transparent hover:border-bxg-red transition-colors duration-300"
            >
              <div className="font-[family-name:var(--font-bebas)] text-[2.5rem] text-bxg-red opacity-40 leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-[0.9rem] text-[#CCC] leading-[1.75] italic mb-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bxg-dark-3 rounded-full flex items-center justify-center font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.75rem] text-bxg-red">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[0.85rem] text-white">
                    {t.name}
                  </div>
                  <div className="text-[0.7rem] text-[#666] mt-[2px]">
                    {t.detail}
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
