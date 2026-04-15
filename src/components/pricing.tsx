"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, staggerItem } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

const plans = [
  {
    name: "Drop-In",
    price: 45,
    period: "per session",
    features: ["Single class access", "Any class type", "No commitment required", "Perfect for visitors"],
    featured: false,
    cta: "Book a Session",
  },
  {
    name: "10-Session Pack",
    price: 380,
    period: "10 sessions",
    features: ["Use flexibly over 3 months", "All class types included", "$38 per session", "Save 15%"],
    featured: false,
    cta: "Get Your Pack",
  },
  {
    name: "1 Month Unlimited",
    price: 298,
    period: "per month",
    features: ["Unlimited classes", "All class types", "Full gym access", "No long-term commitment"],
    featured: true,
    cta: "Start Training",
  },
  {
    name: "6 Months",
    price: 278,
    period: "per month",
    features: ["Unlimited classes", "Save $20/month vs monthly", "Billed monthly", "6-month commitment"],
    featured: false,
    cta: "Commit & Save",
  },
  {
    name: "12 Months",
    price: 258,
    period: "per month",
    features: ["Unlimited classes", "Best rate available", "Billed monthly", "12-month commitment"],
    featured: false,
    cta: "Best Value",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-light py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp className="text-center max-w-[560px] mx-auto mb-14">
          <div className="w-8 h-[2px] bg-bxg-red mx-auto mb-6" />
          <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[4px] uppercase text-[#666] mb-3">
            Membership
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[3px] leading-[1] text-[#0C0C0C]">
            HONEST PRICING
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#666] leading-[1.8] font-light mt-4">
            No lock-in contracts. No hidden fees. Just train.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1100px] mx-auto items-start">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={`p-8 text-center transition-all duration-300 relative ${
                plan.featured
                  ? "bg-[#0C0C0C] border-2 border-bxg-red shadow-[0_8px_40px_rgba(227,27,35,0.15)]"
                  : "bg-[#0C0C0C] border border-[#0C0C0C]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-[1px] left-0 right-0 h-[4px] bg-bxg-red" />
              )}
              {plan.featured && (
                <div className="bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.58rem] tracking-[2.5px] uppercase px-4 py-[4px] w-fit mx-auto mb-5">
                  MOST POPULAR
                </div>
              )}
              <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.75rem] tracking-[2.5px] uppercase text-[#999] mb-3">
                {plan.name}
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-[3.2rem] text-[#F5F5F0] leading-none">
                <span className="text-[1rem] text-bxg-red relative -top-[0.9em]">$</span>
                {plan.price}
              </div>
              <div className="font-[family-name:var(--font-barlow-condensed)] text-[0.72rem] text-[#666] mt-1 tracking-[1px]">
                {plan.period}
              </div>
              <ul className="mt-6 mb-6 text-left space-y-0">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="py-[8px] border-b border-white/[0.06] text-[0.82rem] text-[#CCC] flex items-start gap-2.5"
                  >
                    <span className="text-bxg-red font-bold text-[0.7rem] mt-[2px] flex-shrink-0">
                      &#10003;
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.82rem] tracking-[2px] uppercase px-5 py-[13px] transition-all duration-300 active:scale-[0.97] ${
                  plan.featured
                    ? "bg-bxg-red text-white hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)]"
                    : "bg-transparent text-[#F5F5F0] border border-white/15 hover:border-bxg-red hover:text-bxg-red"
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
