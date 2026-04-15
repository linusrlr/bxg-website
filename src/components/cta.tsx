"use client";

import { FadeUp } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";
const WHATSAPP_URL = "https://wa.me/6588679387?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20BXG";

export function CTA() {
  return (
    <section className="section-red py-[clamp(80px,10vw,140px)] text-center relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-[1200px] mx-auto px-5 relative">
        <FadeUp>
          <div className="w-12 h-[2px] bg-white/40 mx-auto mb-6" />
          <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[4px] uppercase text-white/60 mb-3">
            Ready?
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,6rem)] tracking-[3px] leading-[0.95] text-white mb-5">
            YOUR JOURNEY
            <br />
            STARTS HERE
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.15rem)] text-white/70 leading-[1.8] font-light mx-auto max-w-[520px] mb-10">
            No pressure. No commitment. Book a session, show up, train hard,
            and see if BXG is right for you.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-bxg-red font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] hover:bg-white/90 transition-all duration-300 active:scale-[0.97]"
            >
              Book a Class
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-transparent text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 active:scale-[0.97]"
            >
              WhatsApp Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
