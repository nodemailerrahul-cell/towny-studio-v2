'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ArchitectureCtaProps = {
  shouldReduceMotion: boolean;
};

export function ArchitectureCta({ shouldReduceMotion }: ArchitectureCtaProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Build Your Vision With Us
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Let&apos;s collaborate to create architectural excellence that inspires.
          </p>
          <Button asChild size="lg" className="rounded-full text-lg px-8">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}