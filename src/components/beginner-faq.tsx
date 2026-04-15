"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/lib/motion";

const steps = [
  { title: "Choose Your Class", desc: "Not sure where to start? Fundamentals is perfect for day one. No prior experience needed." },
  { title: "Book Online", desc: "Head to our booking page and pick a Fundamentals class. All bookings are through VibeFam — quick and easy." },
  { title: "Show Up & Train", desc: "Arrive 10 minutes early. We provide all the gear you need — just bring water and a towel." },
  { title: "Level Up", desc: "Progress at your own pace. Your coaches will guide you from fundamentals through pad work and beyond." },
];

const faqs = [
  { q: "Do I need experience?", a: "Not at all. Our Fundamentals class is designed specifically for beginners. We'll teach you everything from the ground up." },
  { q: "What should I wear?", a: "Comfortable athletic clothing — shorts and a t-shirt are perfect. We train barefoot on mats. Bring a water bottle and small towel." },
  { q: "How do I book?", a: "All bookings are through our VibeFam page. Just pick a class, choose your time slot, and you're in. You can also WhatsApp us for any questions." },
  { q: "Is it a hard workout?", a: "Every class is scalable to your level. Beginners work at their own pace, and coaches will never push you beyond what's safe. You will sweat though!" },
  { q: "Can I do a trial class?", a: "Absolutely. Drop-in for a single class at $45 — no commitment, no pressure. Most people are hooked after the first session." },
];

export function BeginnerFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="beginners" className="py-[clamp(80px,10vw,140px)] bg-bxg-dark">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Getting Started — red numbers, no emojis */}
          <div>
            <FadeUp>
              <div className="section-label">New Here?</div>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-white">
                YOUR FIRST CLASS
              </h2>
              <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#777] max-w-[520px] leading-[1.8] font-light mt-4">
                Starting something new takes courage. Here&apos;s exactly how
                your first visit works — no surprises.
              </p>
            </FadeUp>

            <div className="mt-10 space-y-0">
              {steps.map((step, i) => (
                <FadeUp key={step.title} delay={i * 0.1}>
                  <div className="py-5 border-b border-white/[0.06] grid grid-cols-[52px_1fr] gap-4 items-start">
                    <div className="font-[family-name:var(--font-bebas)] text-[2.2rem] text-bxg-red leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.9rem] tracking-[1.5px] uppercase text-white mb-1.5">
                        {step.title}
                      </h4>
                      <p className="text-[0.85rem] text-[#888] leading-[1.7]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* FAQ — no emojis */}
          <div>
            <FadeUp>
              <div className="section-label">FAQ</div>
              <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-white">
                COMMON QUESTIONS
              </h2>
            </FadeUp>

            <div className="mt-10">
              {faqs.map((faq, i) => (
                <FadeUp key={faq.q} delay={i * 0.06}>
                  <div className="border-b border-white/[0.06]">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.9rem] tracking-[1px] text-white py-5 flex items-center justify-between hover:text-bxg-red transition-colors duration-300"
                    >
                      {faq.q}
                      <motion.span
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-[family-name:var(--font-bebas)] text-[1.4rem] text-bxg-red flex-shrink-0 ml-4"
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-[0.85rem] text-[#888] leading-[1.7]">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
