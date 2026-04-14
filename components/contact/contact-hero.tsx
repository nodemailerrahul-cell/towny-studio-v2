"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

type ContactHeroProps = {
  shouldReduceMotion: boolean;
};

export function ContactHero({ shouldReduceMotion }: ContactHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Modern interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="text-primary text-lg uppercase tracking-[0.3em] font-medium mb-6"
          >
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.3,
            }}
            className="text-5xl lg:text-7xl font-serif font-bold mb-8 text-balance"
          >
            Let&apos;s Create <span className="text-primary">Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.5,
            }}
            className="text-xl text-white/70 leading-relaxed text-balance max-w-2xl mx-auto mb-12"
          >
            Whether designing a private residence or a large-scale commercial
            space, Towny Studio brings clarity, creativity, and control to the
            entire process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.8,
            }}
            className="flex justify-center"
          >
            <a
              href="#contact-form"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <ArrowDown className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
