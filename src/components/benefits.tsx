"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const benefitIcons: Record<string, React.ReactNode> = {
  "01": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "02": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z" />
      <path d="M9 21h6" /><path d="M9 18h6" />
    </svg>
  ),
  "03": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "04": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M17.7 7.7a7.5 7.5 0 1 0-10.6 10.6" />
      <path d="M9.4 4.6A7.5 7.5 0 0 1 19.4 14.6" />
      <path d="M21 3l-3.6 7.2-7.2 3.6L14 21" />
    </svg>
  ),
  "05": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "06": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
};

const benefits = [
  {
    num: "01",
    title: "TOTAL BODY CONDITIONING",
    desc: "Build functional strength, explosive power, and cardiovascular endurance through authentic Muay Thai training.",
  },
  {
    num: "02",
    title: "MENTAL FORTITUDE",
    desc: "Push past your limits every round. Build focus, discipline, and resilience that carries beyond the ring.",
  },
  {
    num: "03",
    title: "PRACTICAL SELF-DEFENSE",
    desc: "Learn effective striking using all eight limbs — fists, elbows, knees, and shins. The art of eight limbs.",
  },
  {
    num: "04",
    title: "STRESS RELIEF",
    desc: "Channel stress into power. Leave the gym feeling lighter, sharper, and completely recharged.",
  },
  {
    num: "05",
    title: "COMMUNITY",
    desc: "Train with like-minded people. From beginners to national competitors — everyone belongs here.",
  },
  {
    num: "06",
    title: "STRUCTURED PROGRESSION",
    desc: "Clear curriculum from fundamentals through pad work to advanced application and competition readiness.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-[clamp(80px,10vw,140px)] bg-bxg-dark relative">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <FadeUp className="text-center max-w-[600px] mx-auto mb-16">
          <div className="w-8 h-[2px] bg-bxg-red mx-auto mb-6" />
          <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[4px] uppercase text-white/40 mb-3">
            Why Muay Thai
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[3px] leading-[1] text-white">
            THE ART OF EIGHT LIMBS
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#777] leading-[1.8] font-light mt-4 mx-auto">
            Muay Thai isn&apos;t just a workout — it&apos;s a complete system
            that strengthens your body, sharpens your mind, and builds unshakable
            confidence.
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={staggerItem}
              className="group relative"
            >
              {/* Icon + Number */}
              <div className="flex items-center gap-3 mb-3">
                <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {benefitIcons[b.num]}
                </div>
                <div className="font-[family-name:var(--font-bebas)] text-[2.5rem] text-bxg-red/20 group-hover:text-bxg-red/40 leading-none transition-colors duration-500">
                  {b.num}
                </div>
              </div>
              {/* Thin red line */}
              <div className="w-8 h-[2px] bg-bxg-red/40 group-hover:w-12 group-hover:bg-bxg-red transition-all duration-500 mb-4" />
              <h3 className="font-[family-name:var(--font-bebas)] text-[1.3rem] tracking-[1.5px] text-white mb-2">
                {b.title}
              </h3>
              <p className="text-[0.85rem] text-[#777] leading-[1.7]">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
