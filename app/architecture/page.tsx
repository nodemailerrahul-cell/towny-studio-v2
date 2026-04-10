'use client';

import { useReducedMotion } from 'framer-motion';
import { Footer } from '@/components/footer';

import { ArchitectureHero } from '@/components/architecture/architecture-hero';
import { ServicesSection } from '@/components/architecture/services-section';
import { ExpertiseSection } from '@/components/architecture/expertise-section';
import { DesignPhilosophy } from '@/components/architecture/design-philosophy';
// import { ArchitecturePortfolio } from '@/components/architecture/architecture-portfolio';
import { Packages } from '@/components/packages';
import { ArchitectureCta } from '@/components/architecture/architecture-cta';


export default function ArchitecturePage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <ArchitectureHero shouldReduceMotion={shouldReduceMotion} />
      <ServicesSection shouldReduceMotion={shouldReduceMotion} />
      <ExpertiseSection shouldReduceMotion={shouldReduceMotion} />
      <DesignPhilosophy shouldReduceMotion={shouldReduceMotion} />
      {/* <ArchitecturePortfolio shouldReduceMotion={shouldReduceMotion} /> */}
      <Packages /> 

      <ArchitectureCta shouldReduceMotion={shouldReduceMotion} />
      <Footer />
    </main>
  );
}