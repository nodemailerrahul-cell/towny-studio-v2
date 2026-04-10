'use client';

import { motion } from 'framer-motion';

type OurStoryProps = {
  shouldReduceMotion: boolean;
};

export function OurStory({ shouldReduceMotion }: OurStoryProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Our Story
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Towny Studio is a multidisciplinary design practice that seamlessly integrates architecture and interior design to deliver complete, cohesive building solutions. Rooted in a minimalistic design philosophy, our work emphasizes clarity, balance, and purposeful simplicity — creating spaces that are elegant, functional, and timeless.
            </p>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Our approach goes beyond aesthetics. We believe that every space should reflect the lifestyle, aspirations, and identity of its users while responding intelligently to its context. With a deep understanding of Bengaluru&apos;s unique climate, urban fabric, and construction challenges, we design environments that are climate-responsive, efficient, and built to perform over time.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              At Towny Studio, architecture and interiors are not treated as separate disciplines — they are conceived as a unified process. From concept and planning to detailed design, technical coordination, and execution, our team ensures a seamless journey with precision and attention to detail at every stage.
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
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
              alt="Towny Studio workspace"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}