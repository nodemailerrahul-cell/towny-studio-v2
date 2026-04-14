"use client";

import { motion } from "framer-motion";
import { ImageGallery } from "@/components/image-gallery";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Modern residential architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Contemporary villa design",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    alt: "Commercial building facade",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Luxury home exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Modern office building",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152220-90363f7e65f7?w=800&q=80",
    alt: "Residential complex",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    alt: "Contemporary architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Minimalist design",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    alt: "Architectural detail",
  },
];

type ArchitecturePortfolioProps = {
  shouldReduceMotion: boolean;
};

export function ArchitecturePortfolio({
  shouldReduceMotion,
}: ArchitecturePortfolioProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Architecture Portfolio
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Explore our architectural achievements and innovative designs
          </p>
        </motion.div>

        <ImageGallery images={portfolioImages} autoplay />
      </div>
    </section>
  );
}
