'use client';

import { motion } from 'framer-motion';

type ContactHeroProps = {
  shouldReduceMotion: boolean;
};

export function ContactHero({ shouldReduceMotion }: ContactHeroProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            Let&apos;s Create Together
          </h1>
          <p className="text-xl text-white/70 leading-relaxed text-balance">
            Whether designing a private residence or a large-scale commercial space, Towny Studio brings clarity, creativity, and control to the entire process. Let&apos;s start crafting your space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}