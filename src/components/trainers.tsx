"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "DAMIEN",
    nickname: "June",
    role: "Head Coach — Muay Thai",
    bio: "Skilled instructor with deep knowledge of Muay Thai application and strategy. Leads advanced sessions and brings authentic Thai training methodology to every class.",
    image: "/images/damien.jpg",
  },
  {
    name: "MARTIN",
    role: "Head Coach — Muay Thai",
    bio: "Experienced Muay Thai coach specializing in fundamentals, pad work technique, and fight preparation. Known for building strong foundations and pushing fighters to their potential.",
    image: "/images/martin.jpg",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-[clamp(56px,8vw,110px)] bg-bxg-dark">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Your Coaches</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
            MEET MARTIN & DAMIEN
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] max-w-[560px] leading-[1.7] font-light mt-3">
            Every session is led by experienced coaches who bring real fight
            knowledge and a passion for teaching to every class.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={staggerItem}
              className="relative overflow-hidden group"
            >
              <div className="relative aspect-[3/4] bg-bxg-dark-2 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`Coach ${trainer.name}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/20 to-transparent" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                  <div className="font-[family-name:var(--font-bebas)] text-[1.6rem] tracking-[1px] text-white">
                    {trainer.name}
                  </div>
                  <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[2px] uppercase text-bxg-red mt-[2px]">
                    {trainer.role}
                  </div>
                  <div className="text-[0.82rem] text-[#999] leading-[1.6] mt-2.5">
                    {trainer.bio}
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
