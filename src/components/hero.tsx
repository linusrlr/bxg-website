"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const stats = [
  { value: "22+", label: "Years Legacy" },
  { value: "7", label: "Days a Week" },
  { value: "30+", label: "Classes Weekly" },
  { value: "$45", label: "Drop-In" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
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
          quality={85}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0A0A]/93 via-[#0A0A0A]/60 to-[#0A0A0A]/88" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(227,27,35,0.07),transparent_60%)]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-[2] max-w-[1200px] mx-auto px-5 w-full"
      >
        <div className="max-w-[720px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-bxg-red/10 border border-bxg-red/30 px-4 py-[7px] mb-6"
          >
            <span className="w-[6px] h-[6px] bg-bxg-red rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[2.5px] uppercase text-bxg-red">
              BXG Muay Thai Academy — Reborn Under New Leadership
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-bebas)] text-[clamp(2.8rem,9vw,6.5rem)] leading-[0.95] tracking-[2px] text-white mb-5"
          >
            TRAIN WITH
            <br />
            <span className="text-bxg-red">PURPOSE.</span>
            <br />
            FIGHT WITH
            <br />
            HEART.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(0.9rem,2.5vw,1.15rem)] font-light text-[#CCC] max-w-[480px] leading-[1.75] mb-8"
          >
            Singapore&apos;s original Muay Thai academy — 22 years of forging
            fighters and transforming lives. From your first punch to fight
            night, this is where it starts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-3 flex-wrap"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)] transition-all duration-300 active:scale-[0.97]"
            >
              Book a Class <span>&rarr;</span>
            </a>
            <a
              href="#classes"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] border border-white/20 hover:border-bxg-red hover:text-bxg-red transition-all duration-300 active:scale-[0.97]"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-8 flex-wrap mt-13 pt-8 border-t border-white/8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,2.6rem)] text-white leading-none">
                  {stat.value.includes("+") ? (
                    <>
                      {stat.value.replace("+", "")}
                      <span className="text-bxg-red">+</span>
                    </>
                  ) : stat.value.startsWith("$") ? (
                    <>
                      <span className="text-bxg-red">$</span>
                      {stat.value.slice(1)}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="font-[family-name:var(--font-barlow-condensed)] text-[0.65rem] tracking-[2px] uppercase text-[#666] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
