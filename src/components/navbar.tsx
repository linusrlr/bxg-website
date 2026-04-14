"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#schedule", label: "Schedule" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const BOOKING_URL = "https://bookings.vibefam.com/BXGMuaythai";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/96 backdrop-blur-xl py-2.5 border-b border-white/5"
            : "py-4"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-bebas)] text-2xl tracking-[3px] text-white"
          >
            BXG<span className="text-bxg-red">MTA</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-[family-name:var(--font-barlow-condensed)] font-medium text-[0.8rem] tracking-[2px] uppercase text-[#999] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bxg-red text-white font-[family-name:var(--font-barlow-condensed)] font-semibold text-[0.75rem] tracking-[2px] uppercase px-5 py-2"
              >
                Book Class
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-1 z-[1002]"
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-[22px] h-[2px] bg-white block"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-[22px] h-[2px] bg-white block"
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="w-[22px] h-[2px] bg-white block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A]/98 backdrop-blur-xl z-[1001] flex flex-col items-center justify-center gap-7"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="font-[family-name:var(--font-bebas)] text-3xl tracking-[3px] text-white hover:text-bxg-red transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-bxg-red font-[family-name:var(--font-bebas)] text-2xl tracking-[3px]"
            >
              Book a Class &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
