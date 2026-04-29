"use client";

import {
  Hero,
  BgGradient,
  TextStagger,
  AnimatedContainer,
} from "@/components/ui/hero-animated";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactModal } from "@/components/contact/contact-modal";

type InteriorHeroProps = {
  shouldReduceMotion: boolean;
};

export function InteriorHero({ shouldReduceMotion }: InteriorHeroProps) {
  return (
    <Hero className="px-6 py-20 text-white">
      {/* Gradient overlay */}
      <BgGradient />

      {/* Heading */}
      <TextStagger
        text="Interior Design Excellence"
        className="text-5xl lg:text-7xl font-serif font-bold max-w-4xl"
        stagger={shouldReduceMotion ? 0 : 0.04}
      />

      {/* Description */}
      <AnimatedContainer className="mt-6 max-w-2xl text-white/70 text-xl leading-relaxed">
        Rooted in minimalistic design philosophy, our interiors emphasize
        clarity, balance, and purposeful simplicity &mdash; creating spaces that
        are elegant, functional, and timeless.
      </AnimatedContainer>

      {/* Buttons */}
      <AnimatedContainer
        className="mt-10 flex flex-col sm:flex-row gap-4"
        delay={shouldReduceMotion ? 0 : 0.5}
      >
        <ContactModal>
          <Button size="lg" className="rounded-full px-8 text-xl">
            Start Your Project
          </Button>
        </ContactModal>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 text-xl border border-white/40 bg-transparent text-white
                    transition-all duration-300
                    hover:!bg-white hover:!text-black hover:!border-white
"
        >
          <Link href="/contact#contact">
            Explore Designs
          </Link>
        </Button>
      </AnimatedContainer>
    </Hero>
  );
}
