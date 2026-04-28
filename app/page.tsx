import { Metadata } from 'next';
import { HeroCarousel } from '@/components/hero-carousel';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Towny Studio. We orchestrate space, light, and material to build environments that resonate with purpose.',
};
import { Marquee } from '@/components/marquee';
import { Testimonials } from '@/components/testimonials';
import { Stats } from '@/components/home/stats';
import { AboutPreview } from '@/components/home/about-preview';
import { WhatSetsUsApart } from '@/components/home/what-sets-us-apart';
import { GallerySection } from '@/components/home/gallery-section';
import { CtaSection } from '@/components/home/cta-section';

const marqueeItems = [
  'Architecture',
  'Interior Design',
  'Residential Villas',
  'Luxury Apartments',
  'Commercial Offices',
  'Retail Spaces',
  'Hospitality',
];



export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Marquee */}
      <Marquee items={marqueeItems} className="py-12 border-y border-white/10" />

      {/* Stats */}
      <Stats />

      {/* About Preview */}
      <AboutPreview />

      {/* What Sets Us Apart */}
      <WhatSetsUsApart />

      {/* Gallery */}
      <GallerySection />

      {/* Packages */}
      {/* <Packages /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CtaSection />

    </main>
  );
}