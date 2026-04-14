"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    title: "Minimalist by Design",
    subtitle: "Architecture & Interior Design Studio",
    description:
      "Clarity, balance, and purposeful simplicity — creating spaces that are elegant, functional, and timeless.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80",
    cta: "Explore Projects",
    ctaLink: "/interior",
  },
  {
    title: "Architecture That Endures",
    subtitle: "Climate-Responsive Design for Bengaluru",
    description:
      "Designing environments that respond intelligently to context — efficient, climate-responsive, and built to perform over time.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    cta: "View Architecture",
    ctaLink: "/architecture",
  },
  {
    title: "Thoughtfully Crafted",
    subtitle: "From Concept to Execution",
    description:
      "Architecture and interiors conceived as a unified process — delivering spaces not just built, but crafted to stand the test of time.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    cta: "Start Your Project",
    ctaLink: "/contact",
  },
];

export function HeroCarousel() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: shouldReduceMotion ? 0 : 30 },
    !shouldReduceMotion
      ? [Autoplay({ delay: 6000, stopOnInteraction: false })]
      : [],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-screen">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
              </div>

              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <AnimatePresence mode="wait">
                    {currentIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.8,
                          ease: "easeOut",
                        }}
                        className="max-w-3xl"
                      >
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                            delay: shouldReduceMotion ? 0 : 0.2,
                          }}
                          className="text-primary font-medium mb-4 text-xl"
                        >
                          {slide.subtitle}
                        </motion.p>
                        <motion.h1
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                            delay: shouldReduceMotion ? 0 : 0.3,
                          }}
                          className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                            delay: shouldReduceMotion ? 0 : 0.4,
                          }}
                          className="text-xl text-white/80 mb-8 text-balance"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.6,
                            delay: shouldReduceMotion ? 0 : 0.5,
                          }}
                        >
                          <Button
                            asChild
                            size="lg"
                            className="rounded-full text-xl px-8"
                          >
                            <Link href={slide.ctaLink}>{slide.cta}</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "w-8 bg-primary" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
