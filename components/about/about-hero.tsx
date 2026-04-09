'use client';

import { motion } from 'framer-motion';

type AboutHeroProps = {
  shouldReduceMotion: boolean;
};

export function AboutHero({ shouldReduceMotion }: AboutHeroProps) {
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
            Where Design Meets Purpose
          </h1>
          <p className="text-xl text-white/70 leading-relaxed text-balance">
            For over 15 years, Towny Studio has been at the forefront of innovative interior design and architecture, creating spaces that inspire, function beautifully, and stand the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}