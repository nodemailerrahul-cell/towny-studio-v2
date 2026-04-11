'use client';

import { useReducedMotion } from 'framer-motion';

import { InteriorHero } from '@/components/interior/interior-hero';
import { InteriorServices } from '@/components/interior/interior-services';
import { InteriorProcess } from '@/components/interior/interior-process';
import { InteriorPortfolio } from '@/components/interior/interior-portfolio';
import { InteriorCta } from '@/components/interior/interior-cta';

export default function InteriorPage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <InteriorHero shouldReduceMotion={shouldReduceMotion} />
      <InteriorServices shouldReduceMotion={shouldReduceMotion} />
      <InteriorProcess shouldReduceMotion={shouldReduceMotion} />
      <InteriorPortfolio shouldReduceMotion={shouldReduceMotion} />
      <InteriorCta shouldReduceMotion={shouldReduceMotion} />
    </main>
  );
}