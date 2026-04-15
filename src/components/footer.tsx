"use client";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";
const WHATSAPP_URL = "https://wa.me/6588679387";

export function Footer() {
  return (
    <>
      <footer className="section-dark pt-14 pb-6 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-[1.5rem] tracking-[3px] text-[#F5F5F0] mb-4">
                BXG<span className="text-bxg-red">MTA</span>
              </div>
              <p className="text-[0.82rem] text-[#999] leading-[1.7] max-w-[280px]">
                Singapore&apos;s original Muay Thai academy. Forging fighters
                and building character since 2003.
              </p>
              <div className="w-8 h-[2px] bg-bxg-red/40 mt-5" />
            </div>

            {/* Training */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[3px] uppercase text-[#F5F5F0] mb-5">
                Training
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#classes" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Programs</a></li>
                <li><a href="#schedule" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Schedule</a></li>
                <li><a href="#pricing" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Pricing</a></li>
                <li><a href="#trainers" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Coaches</a></li>
                <li><a href="#beginners" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Beginners</a></li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[3px] uppercase text-[#F5F5F0] mb-5">
                Info
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#about" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">About Us</a></li>
                <li><a href="#testimonials" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Reviews</a></li>
                <li><a href="#beginners" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">FAQ</a></li>
                <li><a href="#contact" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Location</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.68rem] tracking-[3px] uppercase text-[#F5F5F0] mb-5">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li><a href="#contact" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Contact</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">WhatsApp</a></li>
                <li><a href="https://www.instagram.com/bxgmta/" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Instagram</a></li>
                <li><a href="https://linktr.ee/bxgmta" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Linktree</a></li>
                <li><a href="https://www.facebook.com/BXGBoxingFitness/" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Facebook</a></li>
                <li><a href="mailto:bxgmta@gmail.com" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Email</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors duration-300">Book Online</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] text-[0.72rem] text-[#666] flex-wrap gap-3">
            <span>&copy; {new Date().getFullYear()} BXG Muay Thai Academy. All rights reserved.</span>
            <span>260 Tanjong Katong Rd, Singapore 437048</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[999] p-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] bg-[#0C0C0C]/80 backdrop-blur-xl border-t border-white/[0.06]">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.9rem] tracking-[2px] uppercase py-4 hover:bg-bxg-red-dark transition-all duration-300"
        >
          Book a Class
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </>
  );
}
