"use client";

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";
const WHATSAPP_URL = "https://wa.me/6563488380";

export function Footer() {
  return (
    <>
      <footer className="pt-12 pb-6 border-t border-white/6">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="font-[family-name:var(--font-bebas)] text-[1.4rem] tracking-[3px] text-white mb-3">
                BXG<span className="text-bxg-red">MTA</span>
              </div>
              <p className="text-[0.82rem] text-[#999] leading-[1.65] max-w-[280px]">
                Singapore&apos;s original Muay Thai academy. Forging fighters
                and building character since 2003.
              </p>
            </div>

            {/* Training */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[3px] uppercase text-white mb-4">
                Training
              </h4>
              <ul className="space-y-2">
                <li><a href="#classes" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Programs</a></li>
                <li><a href="#schedule" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Schedule</a></li>
                <li><a href="#pricing" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Pricing</a></li>
                <li><a href="#trainers" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Coaches</a></li>
                <li><a href="#beginners" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Beginners</a></li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[3px] uppercase text-white mb-4">
                Info
              </h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Reviews</a></li>
                <li><a href="#beginners" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Location</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.7rem] tracking-[3px] uppercase text-white mb-4">
                Connect
              </h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Contact</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">WhatsApp</a></li>
                <li><a href="https://www.instagram.com/bxgmta/" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Instagram</a></li>
                <li><a href="https://www.facebook.com/BXGBoxingFitness/" target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Facebook</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-[0.82rem] text-[#999] hover:text-bxg-red transition-colors">Book Online</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-6 border-t border-white/6 text-[0.75rem] text-[#666] flex-wrap gap-3">
            <span>&copy; {new Date().getFullYear()} BXG Muay Thai Academy. All rights reserved.</span>
            <span>356 Tanjong Katong Road, Singapore 437119</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[999] p-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/6">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.9rem] tracking-[2px] uppercase py-4 hover:bg-bxg-red-dark transition-all"
        >
          Book a Class — Free Trial <span>&rarr;</span>
        </a>
      </div>
    </>
  );
}
