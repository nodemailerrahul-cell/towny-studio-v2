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
              Founded in 2009 by a group of passionate architects and designers, Towny Studio began with a simple vision: to create spaces that enhance the way people live and work.
            </p>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              What started as a small studio has grown into a full-service design firm, but our core values remain unchanged. We believe in the power of thoughtful design to transform lives, inspire creativity, and create lasting value.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Today, with over 500 completed projects and 25+ industry awards, we continue to push the boundaries of what design can achieve.
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
              alt="Studio workspace"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}