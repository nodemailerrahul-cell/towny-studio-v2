"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

type ContactCtaProps = {
  shouldReduceMotion: boolean;
};

export function ContactCta({ shouldReduceMotion }: ContactCtaProps) {
  const cardBase =
    "group flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 h-full";

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
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
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-primary text-lg uppercase tracking-[0.3em] font-medium mb-4">
              Prefer a Direct Conversation?
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
              Reach Out <span className="text-primary">Anytime</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Our design team is ready to discuss your project and answer any
              questions.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-5 items-stretch">
            {/* Phone */}
            <motion.a
              href="tel:+919741523637"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className={`${cardBase} hover:border-primary/30 hover:bg-primary/[0.03]`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Phone className="w-6 h-6 text-primary" />
              </div>

              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                Phone
              </p>

              <p className="text-[15px] font-semibold text-white group-hover:text-primary transition-colors">
                +91 97415 23637 / +91 97412 52425
              </p>

              <p className="text-xs text-white/30 mt-2">
                Mon – Sat, 9 AM – 6 PM
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:Connect@townystudio.com"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className={`${cardBase} hover:border-purple-500/30 hover:bg-purple-500/[0.03]`}
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>

              <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                Email
              </p>

              <p className="text-[16px] font-semibold text-white group-hover:text-purple-400 transition-colors">
                Connect@townystudio.com
              </p>

              <p className="text-xs text-white/30 mt-2">
                Response within 24 hours
              </p>
            </motion.a>

            {/* Map ONLY */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
              className={`${cardBase} p-0 overflow-hidden hover:border-emerald-500/30`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1259540387896!2d77.60200857436594!3d12.963791215050888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156ab72e9cdd%3A0x4bc98be0302f568b!2sTowny%20Studio!5e0!3m2!1sen!2sin!4v1777298911264!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}