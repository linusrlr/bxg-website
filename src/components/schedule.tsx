"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

type ClassType = "fundamentals" | "padwork" | "advanced";

interface ScheduleSlot {
  time: string;
  name: string;
  trainer: string;
  type: ClassType;
}

const classColors: Record<ClassType, { bg: string; border: string; text: string }> = {
  fundamentals: { bg: "rgba(46,204,113,0.08)", border: "#2ECC71", text: "#2ECC71" },
  padwork: { bg: "rgba(142,68,173,0.08)", border: "#8E44AD", text: "#8E44AD" },
  advanced: { bg: "rgba(230,126,34,0.08)", border: "#E67E22", text: "#E67E22" },
};

const schedule: Record<string, ScheduleSlot[]> = {
  mon: [
    { time: "9:30 AM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "3:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "4:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "6:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "8:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
  ],
  tue: [
    { time: "9:30 AM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "3:00 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "4:30 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "6:30 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "7:30 PM", name: "Advanced Application Class", trainer: "Damien & Martin", type: "advanced" },
  ],
  wed: [
    { time: "9:30 AM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "3:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "4:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "6:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "8:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
  ],
  thu: [
    { time: "9:30 AM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "3:00 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "4:30 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "6:30 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "7:30 PM", name: "Advanced Application Class", trainer: "Damien & Martin", type: "advanced" },
  ],
  fri: [
    { time: "9:30 AM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "3:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "4:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "6:30 PM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
    { time: "8:00 PM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
  ],
  sat: [
    { time: "10:30 AM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "11:30 AM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
  ],
  sun: [
    { time: "10:30 AM", name: "Fundamentals & Fitness Circuits", trainer: "Martin & Damien", type: "fundamentals" },
    { time: "11:30 AM", name: "Pad Work Session", trainer: "Martin & Damien", type: "padwork" },
  ],
};

const days = [
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
  { key: "sun", label: "Sun" },
];

const legend = [
  { label: "Fundamentals & Circuits", color: "#2ECC71" },
  { label: "Pad Work", color: "#8E44AD" },
  { label: "Advanced Application", color: "#E67E22" },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("mon");

  return (
    <section id="schedule" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Weekly Timetable</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-white">
            CLASS SCHEDULE
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Day Tabs */}
          <div className="flex gap-[2px] overflow-x-auto mt-10 mb-6 pb-1 hide-scrollbar">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`relative font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.75rem] tracking-[2px] uppercase py-3 px-5 whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                  activeDay === day.key
                    ? "bg-bxg-red text-white"
                    : "bg-bxg-dark-2 text-[#666] hover:text-white"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Schedule Slots */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-bxg-dark-2/50"
            >
              {schedule[activeDay].map((slot, i) => {
                const colors = classColors[slot.type];
                return (
                  <div
                    key={i}
                    className="flex items-stretch border-b border-white/[0.04] last:border-b-0"
                  >
                    <div className="w-[100px] sm:w-[130px] flex-shrink-0 py-4 px-4 font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.78rem] tracking-[1px] text-[#666] flex items-center">
                      {slot.time}
                    </div>
                    <div
                      className="flex-1 py-3.5 px-4 my-[2px] flex flex-col justify-center"
                      style={{
                        background: colors.bg,
                        borderLeft: `3px solid ${colors.border}`,
                      }}
                    >
                      <div
                        className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.8rem] tracking-[1px] uppercase leading-[1.3]"
                        style={{ color: colors.text }}
                      >
                        {slot.name}
                      </div>
                      <div className="text-[0.7rem] text-[#666] mt-[3px] font-[family-name:var(--font-barlow-condensed)]">
                        {slot.trainer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Legend — colored squares only, no emojis */}
          <div className="flex gap-6 flex-wrap mt-6 pt-4 border-t border-white/[0.06]">
            {legend.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 font-[family-name:var(--font-barlow-condensed)] text-[0.7rem] tracking-[1px] uppercase text-[#666]"
              >
                <div
                  className="w-[10px] h-[10px]"
                  style={{ background: item.color }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Book CTA */}
        <div className="text-center mt-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-10 py-[15px] hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)] transition-all active:scale-[0.97]"
          >
            Book Your Class
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
