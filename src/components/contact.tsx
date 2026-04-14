"use client";

import { FadeUp } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/6563488380?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20BXG";

const contactInfo = [
  { icon: "📍", label: "Location", value: "356 Tanjong Katong Road\nSingapore 437119", href: "https://maps.google.com/?q=356+Tanjong+Katong+Road+Singapore+437119" },
  { icon: "📱", label: "Phone / WhatsApp", value: "+65 6348 8380", href: "tel:+6563488380" },
  { icon: "✉️", label: "Email", value: "enquiry@bxgfitness.com", href: "mailto:enquiry@bxgfitness.com" },
  { icon: "🕐", label: "Mon/Wed/Fri", value: "9:30 AM — 9:00 PM" },
  { icon: "🕐", label: "Tue/Thu", value: "9:30 AM — 9:00 PM" },
  { icon: "🕐", label: "Sat/Sun", value: "10:30 AM — 12:30 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="py-[clamp(56px,8vw,110px)] bg-bxg-dark">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeUp>
          <div className="section-label">Find Us</div>
          <h2 className="font-[family-name:var(--font-bebas)] text-[clamp(2rem,5vw,3.8rem)] tracking-[2px] leading-[1.05] text-white">
            GET IN TOUCH
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <FadeUp key={item.label + item.value}>
                  <div className="flex gap-4 items-start">
                    <div className="w-[42px] h-[42px] bg-bxg-red/10 flex items-center justify-center flex-shrink-0 text-base">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2px] uppercase text-[#666] mb-[3px]">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-[0.92rem] text-white leading-[1.5] whitespace-pre-line hover:text-bxg-red transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[0.92rem] text-white leading-[1.5]">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Map */}
            <FadeUp delay={0.3}>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7816!2d103.9031!3d1.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181e6c21e5e7%3A0x1!2s356+Tanjong+Katong+Rd%2C+Singapore+437119!5e0!3m2!1sen!2ssg!4v1!5m2!1sen!2ssg"
                  className="w-full aspect-video border-0 brightness-[0.85] contrast-[1.1] saturate-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BXG Muay Thai Academy Location"
                />
              </div>
            </FadeUp>
          </div>

          {/* Quick Message via WhatsApp */}
          <FadeUp delay={0.2}>
            <div className="bg-bxg-dark-2 p-8 border border-white/6">
              <h3 className="font-[family-name:var(--font-bebas)] text-[1.8rem] tracking-[1px] text-white mb-2">
                SEND US A MESSAGE
              </h3>
              <p className="text-[0.85rem] text-[#999] leading-[1.65] mb-6">
                Have a question? The fastest way to reach us is via WhatsApp.
                We typically respond within the hour during operating hours.
              </p>

              <div className="space-y-3.5">
                <div>
                  <label className="block font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2px] uppercase text-[#999] mb-[5px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-bxg-dark-2 border border-white/8 text-white text-[0.88rem] py-[13px] px-[14px] outline-none focus:border-bxg-red transition-colors"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2px] uppercase text-[#999] mb-[5px]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-bxg-dark-2 border border-white/8 text-white text-[0.88rem] py-[13px] px-[14px] outline-none focus:border-bxg-red transition-colors"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2px] uppercase text-[#999] mb-[5px]">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+65"
                      className="w-full bg-bxg-dark-2 border border-white/8 text-white text-[0.88rem] py-[13px] px-[14px] outline-none focus:border-bxg-red transition-colors"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[2px] uppercase text-[#999] mb-[5px]">
                    Message
                  </label>
                  <textarea
                    placeholder="I'd like to know more about..."
                    rows={4}
                    className="w-full bg-bxg-dark-2 border border-white/8 text-white text-[0.88rem] py-[13px] px-[14px] outline-none focus:border-bxg-red transition-colors resize-vertical"
                    readOnly
                  />
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.85rem] tracking-[2px] uppercase px-8 py-[15px] hover:bg-bxg-red-dark hover:shadow-[0_0_30px_rgba(227,27,35,0.25)] transition-all active:scale-[0.97]"
              >
                Send via WhatsApp <span>&rarr;</span>
              </a>
              <div className="mt-3 text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-barlow-condensed)] text-[0.78rem] tracking-[1px] text-[#999]"
                >
                  Or message us directly on{" "}
                  <span className="text-[#25D366] font-semibold">
                    WhatsApp &rarr;
                  </span>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
