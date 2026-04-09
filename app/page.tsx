import { HeroCarousel } from '@/components/hero-carousel';
import { Marquee } from '@/components/marquee';
import { Packages } from '@/components/packages';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

import { Stats } from '@/components/home/stats';
import { AboutPreview } from '@/components/home/about-preview';
import { GallerySection } from '@/components/home/gallery-section';
import { CtaSection } from '@/components/home/cta-section';

const marqueeItems = [
  'Interior Design',
  'Architecture',
  'Space Planning',
  'Project Management',
  '3D Visualization',
  'Luxury Homes',
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

      {/* Gallery */}
      <GallerySection />

      {/* Packages */}
      <Packages />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}