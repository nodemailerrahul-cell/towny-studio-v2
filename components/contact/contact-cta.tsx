'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

type ContactCtaProps = {
  shouldReduceMotion: boolean;
};

export function ContactCta({ shouldReduceMotion }: ContactCtaProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-purple-500/[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Prefer a Direct Conversation?
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-balance">
              Reach Out <span className="text-primary">Anytime</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Our design team is ready to discuss your project and answer any questions.
            </p>
          </div>

          {/* Contact cards row */}
          <div className="grid sm:grid-cols-3 gap-5">
            <motion.a
              href="tel:+919876543210"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Phone</p>
              <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                +91 98765 43210
              </p>
              <p className="text-xs text-white/30 mt-2">Mon – Sat, 9 AM – 6 PM</p>
            </motion.a>

            <motion.a
              href="mailto:hello@townystudio.com"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/[0.03] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Email</p>
              <p className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                hello@townystudio.com
              </p>
              <p className="text-xs text-white/30 mt-2">Response within 24 hours</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Studio</p>
              <p className="text-lg font-semibold text-white">
                Bengaluru, Karnataka
              </p>
              <p className="text-xs text-white/30 mt-2">Visit by appointment</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}