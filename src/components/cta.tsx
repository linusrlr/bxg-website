"use client";

import { FadeUp } from "@/lib/motion";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";
const WHATSAPP_URL = "https://wa.me/6563488380?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20BXG";

export function CTA() {
  return (
    <section className="py-[clamp(56px,8vw,110px)] text-center relative overflow-hidden">
      {/* Red radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(227,27,35,0.08),transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto px-5 relative">
        <FadeUp>
          <div className="section-label justify-center before:hidden">
            Ready?
          </div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white mt-2 mb-4">
            YOUR JOURNEY STARTS HERE
          </h2>
          <p className="text-[clamp(0.9rem,2.5vw,1.05rem)] text-[#999] leading-[1.7] font-light mx-auto max-w-[560px] mb-8">
            No pressure. No commitment. Book a session, show up, train hard,
            and see if BXG is right for you.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)] transition-all active:scale-[0.97]"
            >
              Book a Class Now <span>&rarr;</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] transition-all active:scale-[0.97]"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
