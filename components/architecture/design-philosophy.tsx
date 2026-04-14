"use client";

import { motion } from "framer-motion";

type DesignPhilosophyProps = {
  shouldReduceMotion: boolean;
};

export function DesignPhilosophy({
  shouldReduceMotion,
}: DesignPhilosophyProps) {
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
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              Our approach goes beyond aesthetics. We believe that every space
              should reflect the lifestyle, aspirations, and identity of its
              users while responding intelligently to its context. With a deep
              understanding of Bengaluru&apos;s unique climate, urban fabric,
              and construction challenges, we design environments that are
              climate-responsive, efficient, and built to perform over time.
            </p>
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              At Towny Studio, architecture and interiors are not treated as
              separate disciplines — they are conceived as a unified process.
              From concept and planning to detailed design, technical
              coordination, and execution, our team ensures a seamless journey
              with precision and attention to detail at every stage.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Our design language focuses on clean lines, thoughtful material
              selection, and spaces that feel open, intuitive, and enduring.
              Every project we undertake is guided by a commitment to quality,
              detail, and client satisfaction.
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
              src="/architecture/arch_1.jpg"
              alt="Architectural drawing"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
