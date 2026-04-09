'use client';

import { motion } from 'framer-motion';
import { ImageGallery } from '@/components/image-gallery';

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Modern living room with minimalist design' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Contemporary kitchen with marble countertops' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Luxury master bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Minimalist bathroom design' },
  { src: 'https://images.unsplash.com/photo-1600573472556-e636b90f7e09?w=800&q=80', alt: 'Elegant dining room' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', alt: 'Modern office interior' },
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80', alt: 'Cozy reading nook' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', alt: 'Contemporary living space' },
  { src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80', alt: 'Luxury kitchen island' },
];

type InteriorPortfolioProps = {
  shouldReduceMotion: boolean;
};

export function InteriorPortfolio({ shouldReduceMotion }: InteriorPortfolioProps) {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Interior Portfolio
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Explore our collection of beautifully designed interiors
          </p>
        </motion.div>

        <ImageGallery images={portfolioImages} autoplay />
      </div>
    </section>
  );
}