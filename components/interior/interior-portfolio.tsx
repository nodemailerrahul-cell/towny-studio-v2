'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  shouldReduceMotion: boolean;
};

const images = [
  '/interior-port/1.jpg',
  '/interior-port/2.jpg',
  '/interior-port/3.jpg',
  '/interior-port/4.JPG',
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
];

function getSpan(index: number) {
  switch (index % 7) {
    case 0:
      return 'md:col-span-2 md:row-span-2';
    case 3:
      return 'md:col-span-2';
    case 5:
      return 'md:row-span-2';
    default:
      return '';
  }
}

export function InteriorPortfolio({ shouldReduceMotion }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);

    return () => mq.removeEventListener('change', handler);
  }, []);

  const reduce = shouldReduceMotion || isMobile;

  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-5">

        {/* HEADER */}
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
            Interior Portfolio
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            A curated collection of interior design works showcasing space, light, and material.
          </p>
        </div>

        {/* GRID */}
        <div className="
          grid grid-cols-1 gap-1
          sm:grid-cols-2
          md:grid-cols-3 md:grid-flow-dense md:gap-3
        ">
          {images.map((src, i) => (
            <motion.div
              key={src}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? {} : { opacity: 1 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.02 }}
              className={`
                group relative w-full aspect-square
                cursor-pointer overflow-hidden
                rounded-none
                border border-white/10 bg-black
                ${getSpan(i)}
              `}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className={`
                  object-cover
                  ${reduce ? '' : 'transition-transform duration-500 group-hover:scale-102'}
                `}
                priority={i < 4}
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              {/* navigation */}
              <button
                onClick={() =>
                  setLightbox((i) =>
                    i === 0 ? images.length - 1 : (i ?? 0) - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 text-3xl"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setLightbox((i) =>
                    i === images.length - 1 ? 0 : (i ?? 0) + 1
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 text-3xl"
              >
                ›
              </button>

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-white/80 text-xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}