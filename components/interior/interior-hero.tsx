'use client';

import { Hero, BgGradient, TextStagger, AnimatedContainer } from '@/components/ui/hero-animated';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type InteriorHeroProps = {
  shouldReduceMotion: boolean;
};

export function InteriorHero({ shouldReduceMotion }: InteriorHeroProps) {
  return (
    <Hero className="px-6 py-20 text-white">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Interior design"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Gradient overlay */}
      <BgGradient />

      {/* Heading */}
      <TextStagger
        text="Interior Design Excellence"
        className="text-5xl lg:text-7xl font-serif font-bold max-w-4xl"
        stagger={shouldReduceMotion ? 0 : 0.04}
      />

      {/* Description */}
      <AnimatedContainer className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">
        Rooted in minimalistic design philosophy, our interiors emphasize clarity,
        balance, and purposeful simplicity &mdash; creating spaces that are elegant,
        functional, and timeless.
      </AnimatedContainer>

      {/* Buttons */}
      <AnimatedContainer
        className="mt-10 flex flex-col sm:flex-row gap-4"
        delay={shouldReduceMotion ? 0 : 0.5}
      >
        <Button asChild size="lg" className="rounded-full px-8 text-lg">
          <Link href="/contact">Start Your Project</Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 text-lg bg-transparent border-white/30 text-white hover:bg-white hover:text-black"
        >
          <Link href="/interior">Explore Designs</Link>
        </Button>
      </AnimatedContainer>

    </Hero>
  );
}