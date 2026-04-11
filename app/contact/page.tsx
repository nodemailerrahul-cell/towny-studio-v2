'use client';

import { useReducedMotion } from 'framer-motion';

import { ContactHero } from '@/components/contact/contact-hero';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactFormSection } from '@/components/contact/contact-form-section';
import { ContactCta } from '@/components/contact/contact-cta';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white">
      <ContactHero shouldReduceMotion={shouldReduceMotion} />
      <ContactInfo shouldReduceMotion={shouldReduceMotion} />

      {/* Contact Form + Studio Visit */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <ContactFormSection shouldReduceMotion={shouldReduceMotion} />
      </section>

      <ContactCta shouldReduceMotion={shouldReduceMotion} />
    </main>
  );
}