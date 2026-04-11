'use client';

import { useReducedMotion } from 'framer-motion';

import { AboutHero } from '@/components/about/about-hero';
import { OurStory } from '@/components/about/our-story';
import { CoreValues } from '@/components/about/core-values';
import { TeamSection } from '@/components/about/team-section';

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <AboutHero shouldReduceMotion={shouldReduceMotion} />
      <OurStory shouldReduceMotion={shouldReduceMotion} />
      <CoreValues shouldReduceMotion={shouldReduceMotion} />
      <TeamSection shouldReduceMotion={shouldReduceMotion} />
    </main>
  );
}