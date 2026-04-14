"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type InteriorCtaProps = {
  shouldReduceMotion: boolean;
};

export function InteriorCta({ shouldReduceMotion }: InteriorCtaProps) {
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
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Ready to transform your interior? Contact us for a consultation.
          </p>
          <Button asChild size="lg" className="rounded-full text-xl px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
