"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const stats = [
  { value: "22", suffix: "+", label: "Years" },
  { value: "7", suffix: "/7", label: "Days" },
  { value: "30", suffix: "+", label: "Classes" },
  { value: "5.0", suffix: "", label: "Google", icon: true },
];

const headlineWords = ["TRAIN", "WITH", "PURPOSE."];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.9]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex flex-col overflow-hidden section-dark"
    >
      {/* Background Image with Cinematic Zoom */}
      <motion.div
        style={{ scale: imgScale, opacity: imgOpacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/gym-training.jpeg"
          alt="BXG Muay Thai Training"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0C0C0C]/70 via-[#0C0C0C]/30 to-[#0C0C0C]/90"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0C0C0C]/80 via-transparent to-transparent" />

      {/* Main Content — Left-aligned, editorial */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-[2] flex-1 flex flex-col justify-center max-w-[1200px] mx-auto px-5 w-full pt-20"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[5px] uppercase text-white/60 mb-6 flex items-center gap-4"
        >
          <span className="w-10 h-[2px] bg-bxg-red" />
          BXG Muay Thai Academy — Since 2003
        </motion.div>

        {/* Headline — word by word stagger, left-aligned */}
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(5rem,15vw,12rem)] leading-[0.85] tracking-[4px] text-white mb-6 overflow-hidden">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                word === "PURPOSE." ? "text-bxg-red" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(0.95rem,2.5vw,1.15rem)] font-light text-white/50 max-w-[480px] leading-[1.8] mb-10"
        >
          Singapore&apos;s original Muay Thai academy. 22 years of forging
          fighters and transforming lives. From first punch to fight night.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] hover:bg-bxg-red-dark hover:shadow-[0_0_40px_rgba(227,27,35,0.3)] transition-all duration-300 active:scale-[0.97]"
          >
            Book a Class
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#classes"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] border border-white/20 hover:border-bxg-red hover:text-bxg-red transition-all duration-300 active:scale-[0.97]"
          >
            Explore Programs
          </a>
        </motion.div>
      </motion.div>

      {/* Stats Bar — fixed at bottom of viewport */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[2] w-full bg-[#0C0C0C]/80 backdrop-blur-md border-t border-white/[0.08]"
      >
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex justify-between items-center gap-6 flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,3.2rem)] text-white leading-none flex items-center gap-1">
                {stat.icon && (
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="text-[#FBBC04] -mt-1 mr-1">
                    <path d="M10 1l2.47 5.01L18 6.94l-4 3.9.94 5.51L10 13.77l-4.94 2.58L6 10.84l-4-3.9 5.53-.93L10 1z" fill="currentColor"/>
                  </svg>
                )}
                {stat.value}
                <span className="text-bxg-red">{stat.suffix}</span>
              </div>
              <div className="font-[family-name:var(--font-barlow-condensed)] text-[0.65rem] tracking-[2.5px] uppercase text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
