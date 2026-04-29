'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  shouldReduceMotion: boolean;
};

const images = [
  '/interior-port/1.jpg',
  '/interior-port/2.jpg',
  '/interior-port/3.jpg',
  '/interior-port/4-new.jpg',
  '/interior-port/5.png',
  '/interior-port/6.jpg',
  '/interior-port/7.jpg',
  '/interior-port/8.jpg',
  '/interior-port/9.jpg',
  '/interior-port/10.jpg',
  '/interior-port/12.jpg',
  '/interior-port/13.jpg',
  '/interior-port/14.jpg',
  '/interior-port/15.jpg',
  '/interior-port/16.jpg',
  '/interior-port/17.jpg',
  '/interior-port/18.jpg',
  '/interior-port/19.jpg',
  '/interior-port/20.jpg',
  '/interior-port/21.jpg',
  '/interior-port/22.jpg',
  '/interior-port/23.jpg',
  '/interior-port/24.jpg',
  '/interior-port/25.jpeg',
  '/interior-port/26.jpeg',
  '/interior-port/27.jpeg',
  '/interior-port/28.jpeg',
];

/**
 * Deterministic layout pattern for the grid.
 * Each item gets a Tailwind class for its grid behaviour.
 * Pattern repeats every 8 items and is designed so that
 * a 3-column desktop grid has NO holes.
 *
 * Mobile (1 col) and tablet (2 col) always use single-span items
 * so they can never produce gaps.
 */
function getGridClasses(index: number): string {
  const base = 'relative overflow-hidden cursor-pointer group';

  // On mobile / tablet every tile is a plain 1×1 square
  // On desktop (md) we introduce some variety
  switch (index % 8) {
    // tall tile — spans 2 rows, occupies 1 column
    case 0:
      return `${base} aspect-square md:aspect-auto md:row-span-2`;
    // wide tile — spans 2 columns
    case 3:
      return `${base} aspect-square md:aspect-video md:col-span-2`;
    // all other tiles — simple 1×1
    default:
      return `${base} aspect-square`;
  }
}

export function InteriorPortfolio({ shouldReduceMotion }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* ---------- lightbox keyboard nav ---------- */
  const goPrev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : i === 0 ? images.length - 1 : i - 1,
      ),
    [],
  );

  const goNext = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : i === images.length - 1 ? 0 : i + 1,
      ),
    [],
  );

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') closeLightbox();
    }

    // Lock body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, goPrev, goNext, closeLightbox]);

  return (
    <section id='interior-portfolio' className="py-10 lg:py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">
        {/* ── HEADER ─────────────────────────────── */}
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Interior Portfolio
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            A curated collection of interior design works showcasing space,
            light, and material.
          </p>
        </div>

        {/* ── GRID ───────────────────────────────── */}
        <div
          className="
            grid grid-cols-2 gap-1.5
            sm:grid-cols-2 sm:gap-2
            md:grid-cols-3 md:gap-3
          "
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              /* ── animation ── */
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={
                shouldReduceMotion ? {} : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : (i % 6) * 0.06,
                ease: 'easeOut',
              }}
              className={`${getGridClasses(i)} border border-white/10 bg-neutral-900`}
            >
              <Image
                src={src}
                alt={`Interior portfolio image ${i + 1}`}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                className={`
                  object-cover
                  ${shouldReduceMotion ? '' : 'transition-transform duration-500 group-hover:scale-105'}
                `}
                priority={i < 6}
              />

              {/* hover overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/40 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* zoom icon on hover */}
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 pointer-events-none
                "
              >
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-lg">
                  ⤢
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ─────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* image counter */}
            <span className="absolute top-4 left-4 text-white/50 text-sm font-mono select-none">
              {lightbox + 1} / {images.length}
            </span>

            {/* close button */}
            <button
              onClick={closeLightbox}
              className="
                absolute top-4 right-4 z-10
                w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm
                flex items-center justify-center
                text-white/80 hover:text-white hover:bg-white/20
                transition-colors text-lg
              "
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* main image */}
            <div
              className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightbox}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={
                    shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }
                  }
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[lightbox]}
                    alt={`Interior portfolio image ${lightbox + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* prev / next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="
                  absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full
                  bg-white/10 backdrop-blur-sm
                  flex items-center justify-center
                  text-white/80 hover:text-white hover:bg-white/20
                  transition-colors text-xl sm:text-2xl
                "
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="
                  absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full
                  bg-white/10 backdrop-blur-sm
                  flex items-center justify-center
                  text-white/80 hover:text-white hover:bg-white/20
                  transition-colors text-xl sm:text-2xl
                "
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}