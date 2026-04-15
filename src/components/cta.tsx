"use client";

import { FadeUp } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";
const WHATSAPP_URL = "https://wa.me/6588679387?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20BXG";

export function CTA() {
  return (
    <section className="py-[clamp(80px,10vw,140px)] text-center relative overflow-hidden">
      {/* Radial red glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(227,27,35,0.1),transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-5 relative">
        <FadeUp>
          {/* Thin accent line */}
          <div className="w-8 h-[2px] bg-bxg-red mx-auto mb-6" />
          <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.65rem] tracking-[4px] uppercase text-white/40 mb-3">
            Ready?
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4.5rem)] tracking-[3px] leading-[1] text-white mb-5">
            YOUR JOURNEY
            <br />
            <span className="text-bxg-red">STARTS HERE</span>
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#777] leading-[1.8] font-light mx-auto max-w-[520px] mb-10">
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
              className="inline-flex items-center gap-3 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] hover:bg-bxg-red-dark hover:shadow-[0_0_40px_rgba(227,27,35,0.3)] transition-all duration-300 active:scale-[0.97]"
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
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2.5px] uppercase px-10 py-[16px] hover:bg-[#1DA851] transition-all duration-300 active:scale-[0.97]"
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
