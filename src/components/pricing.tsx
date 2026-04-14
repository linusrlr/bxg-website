"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const plans = [
  {
    name: "Drop-In",
    price: 45,
    period: "per session",
    features: ["Single class access", "Any class type", "No commitment required", "Perfect for visitors & trying out"],
    featured: false,
    cta: "Book a Session",
  },
  {
    name: "10-Session Pack",
    price: 380,
    period: "10 sessions · 3 months validity",
    features: ["10 classes to use flexibly", "Valid for 3 months", "All class types included", "$38 per session — save 15%"],
    featured: false,
    cta: "Get Your Pack",
  },
  {
    name: "1 Month Unlimited",
    price: 298,
    period: "per month · unlimited classes",
    features: ["Unlimited classes all month", "All class types included", "Full gym access", "No long-term commitment"],
    featured: true,
    cta: "Start Training",
  },
  {
    name: "6 Months",
    price: 278,
    period: "per month · billed monthly",
    features: ["Unlimited classes", "Save $20/month vs monthly", "Deducted monthly — no lump sum", "6-month commitment"],
    featured: false,
    cta: "Commit & Save",
  },
  {
    name: "12 Months — Best Value",
    price: 258,
    period: "per month · billed monthly",
    features: ["Unlimited classes", "Best rate — save $40/month", "Deducted monthly — no lump sum", "12-month commitment"],
    featured: false,
    cta: "Best Deal →",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-[clamp(56px,8vw,110px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp className="text-center max-w-[560px] mx-auto mb-12">
          <div className="section-label justify-center before:hidden">
            Membership
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white mt-2">
            HONEST PRICING
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] leading-[1.7] font-light mt-3">
            No lock-in contracts. No hidden fees. Just train.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1100px] mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={`p-10 text-center border transition-all duration-300 ${
                plan.featured
                  ? "border-bxg-red bg-gradient-to-b from-bxg-red/6 to-bxg-dark-2"
                  : "bg-bxg-dark-2 border-white/4"
              }`}
            >
              {plan.featured && (
                <div className="bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.6rem] tracking-[2px] uppercase px-4 py-[5px] w-fit mx-auto -mt-[40px] mb-6">
                  MOST POPULAR
                </div>
              )}
              <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.8rem] tracking-[3px] uppercase text-[#999] mb-3">
                {plan.name}
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-[3.5rem] text-white leading-none">
                <sup className="text-[1.2rem] -top-[1em] relative">$</sup>
                {plan.price}
              </div>
              <div className="font-[family-name:var(--font-barlow-condensed)] text-[0.75rem] text-[#666] mt-1 tracking-[1px]">
                {plan.period}
              </div>
              <ul className="mt-7 mb-7 text-left space-y-0">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="py-[9px] border-b border-white/4 text-[0.84rem] text-[#CCC] flex items-center gap-2"
                  >
                    <span className="text-bxg-red font-bold text-[0.75rem]">
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-6 py-[15px] transition-all active:scale-[0.97] ${
                  plan.featured
                    ? "bg-bxg-red text-white hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)]"
                    : "bg-transparent text-white border border-white/20 hover:border-bxg-red hover:text-bxg-red"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
