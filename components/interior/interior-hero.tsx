'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type InteriorHeroProps = {
  shouldReduceMotion: boolean;
};

export function InteriorHero({ shouldReduceMotion }: InteriorHeroProps) {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Interior design"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            Interior Design Excellence
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed text-balance">
            Transform your space into a reflection of your personality and lifestyle with our expert interior design services.
          </p>
          <Button asChild size="lg" className="rounded-full text-lg px-8">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}