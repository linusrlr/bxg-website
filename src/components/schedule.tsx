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
  fundamentals: { bg: "rgba(46,204,113,0.1)", border: "#2ECC71", text: "#2ECC71" },
  padwork: { bg: "rgba(142,68,173,0.1)", border: "#8E44AD", text: "#8E44AD" },
  advanced: { bg: "rgba(230,126,34,0.1)", border: "#E67E22", text: "#E67E22" },
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
  { key: "mon", label: "Monday" },
  { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" },
  { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" },
  { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
];

const legend = [
  { label: "Fundamentals & Circuits", color: "#2ECC71" },
  { label: "Pad Work", color: "#8E44AD" },
  { label: "Advanced Application", color: "#E67E22" },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("mon");

  return (
    <section id="schedule" className="py-[clamp(56px,8vw,110px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Weekly Timetable</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
            CLASS SCHEDULE
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Day Tabs */}
          <div className="flex gap-1 overflow-x-auto mt-8 mb-5 pb-1 hide-scrollbar">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key)}
                className={`font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[2px] uppercase py-2.5 px-[18px] whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                  activeDay === day.key
                    ? "bg-bxg-red text-white"
                    : "bg-bxg-dark-2 text-[#999] hover:text-white"
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {schedule[activeDay].map((slot, i) => {
                const colors = classColors[slot.type];
                return (
                  <div
                    key={i}
                    className="flex items-stretch border-b border-white/4 last:border-b-0"
                  >
                    <div className="w-[100px] sm:w-[120px] flex-shrink-0 py-4 px-3 font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.75rem] tracking-[1px] text-[#999] flex items-center">
                      {slot.time}
                    </div>
                    <div
                      className="flex-1 py-3 px-4 my-1 flex flex-col justify-center"
                      style={{
                        background: colors.bg,
                        borderLeft: `3px solid ${colors.border}`,
                      }}
                    >
                      <div
                        className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.78rem] tracking-[1px] uppercase leading-[1.3]"
                        style={{ color: colors.text }}
                      >
                        {slot.name}
                      </div>
                      <div className="text-[0.7rem] text-[#999] mt-[3px] font-[family-name:var(--font-barlow-condensed)]">
                        {slot.trainer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <div className="flex gap-5 flex-wrap mt-5 pt-4 border-t border-white/6">
            {legend.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 font-[family-name:var(--font-barlow-condensed)] text-[0.7rem] tracking-[1px] uppercase text-[#999]"
              >
                <div
                  className="w-[10px] h-[10px] rounded-[2px]"
                  style={{ background: item.color }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Book CTA */}
        <div className="text-center mt-7">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)] transition-all active:scale-[0.97]"
          >
            Book Your Class Now <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
