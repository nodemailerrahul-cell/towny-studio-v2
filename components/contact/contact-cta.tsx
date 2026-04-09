'use client';

import { motion } from 'framer-motion';

type ContactCtaProps = {
  shouldReduceMotion: boolean;
};

export function ContactCta({ shouldReduceMotion }: ContactCtaProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-balance">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-white/70 mb-6 text-balance">
              Give us a call and speak directly with one of our design experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+919876543210"
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                +91 98765 43210
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <p className="text-white/60">Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}