'use client';

import { motion } from 'framer-motion';

type DesignPhilosophyProps = {
  shouldReduceMotion: boolean;
};

export function DesignPhilosophy({ shouldReduceMotion }: DesignPhilosophyProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Our Design Philosophy
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              We believe architecture should do more than shelter—it should inspire. Every project begins with understanding the unique context: the site, the climate, the culture, and most importantly, the people who will inhabit the space.
            </p>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Our designs balance timeless aesthetics with modern functionality, creating buildings that are both beautiful and sustainable. We embrace innovation while respecting tradition, always striving for harmony between built form and natural environment.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Through meticulous attention to detail and collaborative design process, we create architecture that stands as a testament to thoughtful, purposeful design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
              alt="Architectural drawing"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}