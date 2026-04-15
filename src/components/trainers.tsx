"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "DAMIEN",
    nickname: '"June"',
    role: "Head Coach — Muay Thai",
    bio: "Skilled instructor with deep knowledge of Muay Thai application and strategy. Leads advanced sessions and brings authentic Thai training methodology to every class.",
    image: "/images/damien.jpg",
  },
  {
    name: "MARTIN",
    nickname: null,
    role: "Head Coach — Muay Thai",
    bio: "Experienced Muay Thai coach specializing in fundamentals, pad work technique, and fight preparation. Known for building strong foundations and pushing fighters to their potential.",
    image: "/images/martin.jpg",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-[clamp(80px,10vw,140px)] bg-bxg-dark">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Your Coaches</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-white">
            MEET THE COACHES
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#777] max-w-[520px] leading-[1.8] font-light mt-4">
            Every session is led by experienced coaches who bring real fight
            knowledge and a passion for teaching to every class.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
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
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

                {/* Red accent line at top */}
                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-bxg-red transition-all duration-700" />

                {/* Info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
                  <div className="flex items-baseline gap-3">
                    <div className="font-[family-name:var(--font-bebas)] text-[2rem] tracking-[2px] text-white">
                      {trainer.name}
                    </div>
                    {trainer.nickname && (
                      <div className="font-[family-name:var(--font-barlow-condensed)] text-[0.85rem] text-white/40 italic">
                        {trainer.nickname}
                      </div>
                    )}
                  </div>
                  <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[2.5px] uppercase text-bxg-red mt-1">
                    {trainer.role}
                  </div>
                  <div className="w-8 h-[2px] bg-bxg-red/40 mt-3 mb-3" />
                  <div className="text-[0.84rem] text-[#999] leading-[1.65]">
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
