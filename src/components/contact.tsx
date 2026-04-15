"use client";

import React from "react";
import { FadeUp } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/6588679387?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20classes%20at%20BXG";

const contactIcons: Record<string, React.ReactNode> = {
  Location: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  "Phone / WhatsApp": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red flex-shrink-0 mt-0.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Email: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red flex-shrink-0 mt-0.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  ),
};

const contactItems = [
  {
    label: "Location",
    value: "260 Tanjong Katong Rd\nSingapore 437048",
    href: "https://maps.google.com/?q=260+Tanjong+Katong+Rd+Singapore+437048",
  },
  {
    label: "Phone / WhatsApp",
    value: "+65 8867 9387",
    href: "tel:+6588679387",
  },
  {
    label: "Email",
    value: "bxgmta@gmail.com",
    href: "mailto:bxgmta@gmail.com",
  },
];

const hours = [
  { label: "Mon / Wed / Fri", value: "9:30 AM — 9:00 PM" },
  { label: "Tue / Thu", value: "9:30 AM — 9:00 PM" },
  { label: "Sat / Sun", value: "10:30 AM — 12:30 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="section-light py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Find Us</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2.2rem,5vw,4rem)] tracking-[2px] leading-[1] text-[#0C0C0C]">
            GET IN TOUCH
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-12">
          {/* Left: Contact Info + Map */}
          <div>
            {/* Contact Items */}
            <div className="space-y-7">
              {contactItems.map((item) => (
                <FadeUp key={item.label}>
                  <div className="flex gap-4 items-start">
                    {contactIcons[item.label] || <div className="w-[10px] h-[10px] bg-bxg-red/60 mt-1.5 flex-shrink-0" />}
                    <div>
                      <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2.5px] uppercase text-[#666] mb-1">
                        {item.label}
                      </div>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[0.92rem] text-[#0C0C0C] leading-[1.6] whitespace-pre-line hover:text-bxg-red transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Operating Hours */}
            <FadeUp delay={0.2}>
              <div className="mt-10 pt-8 border-t border-[#0C0C0C]/[0.08]">
                <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2.5px] uppercase text-[#666] mb-4">
                  Operating Hours
                </div>
                <div className="space-y-2.5">
                  {hours.map((h) => (
                    <div key={h.label} className="flex items-center gap-3">
                      <div className="w-[6px] h-[6px] bg-bxg-red/40 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.82rem] text-[#666] w-[130px]">
                        {h.label}
                      </span>
                      <span className="text-[0.88rem] text-[#0C0C0C]">
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.3}>
              <div className="mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7816!2d103.9031!3d1.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181e6c21e5e7%3A0x1!2s260+Tanjong+Katong+Rd%2C+Singapore+437048!5e0!3m2!1sen!2ssg!4v1!5m2!1sen!2ssg"
                  className="w-full aspect-video border-0 brightness-[0.95] contrast-[1.05]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BXG Muay Thai Academy Location"
                />
              </div>
            </FadeUp>
          </div>

          {/* Right: WhatsApp Contact Card — dark panel on light bg */}
          <FadeUp delay={0.2}>
            <div className="bg-[#0C0C0C] p-8 border border-[#0C0C0C] lg:sticky lg:top-24">
              <div className="w-8 h-[2px] bg-bxg-red mb-6" />
              <h3 className="font-[family-name:var(--font-bebas)] text-[2rem] tracking-[2px] text-[#F5F5F0] mb-3">
                REACH OUT ANYTIME
              </h3>
              <p className="text-[0.88rem] text-[#999] leading-[1.75] mb-8">
                Have a question about classes, pricing, or getting started?
                The fastest way to reach us is via WhatsApp.
                We typically respond within the hour during operating hours.
              </p>

              {/* Quick Questions */}
              <div className="space-y-3 mb-8">
                <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2.5px] uppercase text-[#666] mb-3">
                  Common Inquiries
                </div>
                {[
                  "Class schedule & availability",
                  "Trial class information",
                  "Membership & pricing details",
                  "Location & parking info",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-[6px] h-[1px] bg-bxg-red/60" />
                    <span className="text-[0.84rem] text-[#AAA]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[16px] hover:bg-[#1DA851] transition-all duration-300 active:scale-[0.97]"
              >
                Message Us on WhatsApp
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="mt-4 text-center">
                <a
                  href="tel:+6588679387"
                  className="font-[family-name:var(--font-barlow-condensed)] text-[0.78rem] tracking-[1px] text-[#666] hover:text-[#F5F5F0] transition-colors duration-300"
                >
                  Or call us at +65 8867 9387
                </a>
              </div>

              {/* Instagram CTA */}
              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bxg-red">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <a
                  href="https://www.instagram.com/bxgmta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-barlow-condensed)] text-[0.82rem] tracking-[1px] text-[#AAA] hover:text-bxg-red transition-colors duration-300"
                >
                  Follow us @bxgmta
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
