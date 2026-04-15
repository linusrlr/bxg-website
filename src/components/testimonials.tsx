"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const reviews = [
  {
    text: "The trainers were super friendly and patient, and the pace was very well suited for beginners. We really appreciated that they took the time to guide us and correct our posture. Absolutely recommended!",
    name: "Sarah",
    stars: 5,
  },
  {
    text: "The trainers were patient, motivating and friendly! Great for beginners and advanced! Highly recommended for anyone looking for a great Muay Thai experience!",
    name: "Yeo",
    stars: 5,
  },
  {
    text: "I attended the beginner class and learned a lot. The instructors were very motivating. I would recommend going with friends!",
    name: "JiaRong Sim",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-[#FBBC04]">
      <path d="M10 1l2.47 5.01L18 6.94l-4 3.9.94 5.51L10 13.77l-4.94 2.58L6 10.84l-4-3.9 5.53-.93L10 1z"/>
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-dark py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label">Google Reviews</div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-[#F5F5F0]">
              WHAT MEMBERS SAY
            </h2>
          </div>
          {/* Google Rating — huge prominent number */}
          <div className="flex items-center gap-4">
            <div className="font-[family-name:var(--font-bebas)] text-[4rem] text-[#F5F5F0] leading-none">
              5.0
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-[2px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="text-[#FBBC04]">
                    <path d="M10 1l2.47 5.01L18 6.94l-4 3.9.94 5.51L10 13.77l-4.94 2.58L6 10.84l-4-3.9 5.53-.93L10 1z"/>
                  </svg>
                ))}
              </div>
              <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.72rem] tracking-[1px] uppercase text-[#999]">
                on Google
              </span>
            </div>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={staggerItem}
              className="bg-[#161618] p-7 relative group hover:bg-[#161618]/80 transition-colors duration-300"
            >
              {/* Red quotation mark accent */}
              <div className="font-[family-name:var(--font-bebas)] text-[4rem] text-bxg-red/30 leading-none mb-2 select-none">
                &ldquo;
              </div>

              <p className="text-[0.88rem] text-[#CCC] leading-[1.75] mb-6 min-h-[60px]">
                {r.text}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <span className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.82rem] tracking-[0.5px] text-[#F5F5F0]">
                  {r.name}
                </span>
                <div className="flex gap-[2px]">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
