'use client';

import { useReducedMotion } from 'framer-motion';
import { Footer } from '@/components/footer';

import { ContactHero } from '@/components/contact/contact-hero';
import { ContactInfo } from '@/components/contact/contact-info';
import { ContactFormSection } from '@/components/contact/contact-form-section';
import { ContactCta } from '@/components/contact/contact-cta';

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <ContactHero shouldReduceMotion={shouldReduceMotion} />
      <ContactInfo shouldReduceMotion={shouldReduceMotion} />

      {/* Contact Form + Map Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <ContactFormSection shouldReduceMotion={shouldReduceMotion} />
      </section>

      <ContactCta shouldReduceMotion={shouldReduceMotion} />
      <Footer />
    </main>
  );
}