"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ContactModal } from "@/components/contact/contact-modal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/interior", label: "Interior" },
  { href: "/architecture", label: "Architecture" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-black/80 backdrop-blur-md border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="Towny Studio – Home"
            >
              <motion.div
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.04 }}
                whileTap={{ scale: shouldReduceMotion ? 1 : 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo_white.jpeg"
                  alt="Towny Studio – Architect | Interior | Life Style"
                  width={148}
                  height={60}
                  className="h-11 lg:h-14 w-auto object-contain drop-shadow-[0_1px_6px_rgba(255,255,255,0.08)] transition-opacity duration-300 group-hover:opacity-90"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium tracking-wide transition-colors duration-200 hover:text-primary relative group ${
                    pathname === link.href ? "text-primary" : "text-white/80"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-px bg-primary transition-transform duration-300 origin-left ${
                      pathname === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <ContactModal>
                <Button asChild className="rounded-full">
                  <Link href="#">Get Started</Link>
                </Button>
              </ContactModal>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: shouldReduceMotion ? "tween" : "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed inset-0 z-40 bg-black lg:hidden flex flex-col"
          >
            {/* Mobile header with logo */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_white.jpeg"
                alt="Towny Studio"
                width={130}
                height={52}
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 px-8 space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                    duration: shouldReduceMotion ? 0 : 0.3,
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl font-serif font-bold transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : navLinks.length * 0.1,
                  duration: shouldReduceMotion ? 0 : 0.3,
                }}
                className="pt-8"
              >
                <ContactModal>
                <Button asChild size="lg" className="rounded-full text-xl px-8">
                  <Link href="#">Get Started</Link>
                </Button>
                </ContactModal>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
