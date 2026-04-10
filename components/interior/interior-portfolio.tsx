'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type InteriorPortfolioProps = {
  shouldReduceMotion: boolean;
};

type PortfolioItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const portfolioImages: PortfolioItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    alt: 'Modern living room with minimalist design',
    title: 'Living Room',
    description: 'Soft textures, warm neutrals, and calm proportions.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    alt: 'Contemporary kitchen with marble countertops',
    title: 'Kitchen',
    description: 'Marble surfaces and clean lines for a refined finish.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    alt: 'Luxury master bedroom',
    title: 'Bedroom',
    description: 'A quiet, layered space built for rest and comfort.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    alt: 'Minimalist bathroom design',
    title: 'Bathroom',
    description: 'Minimal spa details with a crisp and serene palette.',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
    alt: 'Modern office interior',
    title: 'Office',
    description: 'Focused, modern interiors with a polished edge.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
    alt: 'Contemporary living space',
    title: 'Lounge',
    description: 'Contemporary openness with a soft layered feel.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80',
    alt: 'Luxury kitchen island',
    title: 'Island Kitchen',
    description: 'Statement island design with a premium visual rhythm.',
  },
];

function ChevronLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function InteriorPortfolio({ shouldReduceMotion }: InteriorPortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? portfolioImages.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === portfolioImages.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const targetScroll = activeIndex * container.offsetWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  }, [activeIndex, isMobile, shouldReduceMotion]);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const container = containerRef.current;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      let newIndex = Math.round(scrollLeft / itemWidth);
      newIndex = Math.max(0, Math.min(newIndex, portfolioImages.length - 1));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isMobile, activeIndex]);

  useEffect(() => {
    if (!isMobile && containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [isMobile]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/45">
            Selected work
          </p>
          <h2 className="text-4xl font-serif font-bold text-balance lg:text-5xl">
            Interior Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60 text-balance">
            Explore a curated collection of interiors with a more tactile,
            click-friendly layout.
          </p>
        </motion.div>

        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-white/45">
              {isMobile
                ? 'Swipe or tap a card to explore'
                : 'Click any panel, use the arrows, or press ← →'}
            </p>

            <p className="text-sm text-white/45">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(portfolioImages.length).padStart(2, '0')}
            </p>
          </div>

          {/* Desktop arrows only */}
          <div className="absolute left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="grid h-11 w-11 place-items-center border border-white/15 bg-black/45 text-white shadow-lg backdrop-blur-md transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute right-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="grid h-11 w-11 place-items-center border border-white/15 bg-black/45 text-white shadow-lg backdrop-blur-md transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>

          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}
            className={`flex h-[clamp(380px,62vh,560px)] ${
              isMobile
                ? 'overflow-x-auto snap-x snap-mandatory gap-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x'
                : 'overflow-hidden gap-3'
            }`}
            role="region"
            aria-label="Interior portfolio gallery"
          >
            {portfolioImages.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.src}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`View ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    if (!shouldReduceMotion && !isMobile) setActiveIndex(index);
                  }}
                  onFocus={() => setActiveIndex(index)}
                  className="group relative isolate overflow-hidden border border-white/10 bg-zinc-950 text-left outline-none transition-[transform,box-shadow,filter,opacity] duration-700 ease-out focus-visible:ring-2 focus-visible:ring-white/70"
                  style={{
                    ...(isMobile
                      ? {
                          flex: '0 0 100%',
                          width: '100%',
                          scrollSnapAlign: 'start',
                        }
                      : {
                          flex: isActive ? '7 1 0%' : '1 1 0%',
                          minWidth: isActive
                            ? 'min(58vw, 760px)'
                            : 'clamp(96px, 10vw, 170px)',
                        }),
                    opacity: 1,
                    boxShadow: isActive
                      ? '0 26px 70px rgba(0,0,0,0.45)'
                      : '0 12px 30px rgba(0,0,0,0.22)',
                    transitionDuration: shouldReduceMotion ? '0ms' : '700ms',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                    style={{
                      transform: isActive ? 'scale(1.03)' : 'scale(1.08)',
                      filter: isActive
                        ? 'saturate(1.02) contrast(1.02) brightness(0.98)'
                        : 'saturate(0.88) contrast(0.98) brightness(0.82)',
                      transitionDuration: shouldReduceMotion ? '0ms' : '900ms',
                    }}
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: isActive
                        ? 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.06) 100%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.10) 100%)',
                    }}
                  />

                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 transition-opacity duration-700 group-hover:ring-white/10" />

                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4 sm:p-5">
                    <span className="border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm">
                      {isActive ? 'Active' : 'Preview'}
                    </span>

                    <span className="grid h-9 w-9 place-items-center border border-white/15 bg-black/30 text-white/80 backdrop-blur-sm transition group-hover:bg-black/45">
                      {isActive ? (
                        <ChevronRightIcon className="h-4 w-4 rotate-90" />
                      ) : (
                        <ChevronRightIcon className="h-4 w-4" />
                      )}
                    </span>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                    style={{
                      transitionDuration: shouldReduceMotion ? '0ms' : '650ms',
                    }}
                  >
                    {isActive ? (
                      <div className="max-w-xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                          Selected interior
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                          {item.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                          Tap another panel or swipe
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-end justify-between gap-3">
                        <div className="max-w-[8rem] sm:max-w-[10rem]">
                          <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                            Tap
                          </p>
                          <h3 className="mt-1 text-sm font-medium leading-tight text-white/95 sm:text-base">
                            {item.title}
                          </h3>
                        </div>

                        <div className="border border-white/15 bg-white/10 p-2 text-white/90 backdrop-blur-sm transition group-hover:bg-white/15">
                          <ChevronRightIcon className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Mobile pagination dots */}
          <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
            {portfolioImages.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${item.title}`}
                  aria-pressed={isActive}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive ? 'w-8 bg-white' : 'w-2.5 bg-white/35'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}