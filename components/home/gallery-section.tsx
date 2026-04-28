"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Modern living room" },
  { src: "/gallery/2.jpg", alt: "Contemporary kitchen" },
  { src: "/gallery/3.jpg", alt: "Luxury bedroom" },
  { src: "/gallery/4.jpg", alt: "Minimalist bathroom" },
  { src: "/gallery/5.jpg", alt: "Modern office space" },
  { src: "/gallery/6.jpg", alt: "Modern office space" },
  { src: "/gallery/7.jpg", alt: "Modern office space" },
  { src: "/gallery/8.jpg", alt: "Modern office space" },
  { src: "/gallery/9.jpg", alt: "Modern office space" },
  { src: "/gallery/10.jpg", alt: "Modern office space" },
  { src: "/gallery/11.jpg", alt: "Modern office space" },

];

export function GallerySection() {
  const [active, setActive] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Detect screen size safely (no hydration issues)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryImages.length);
    }, 2500);
  };

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
    startAutoPlay();
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % galleryImages.length);
    startAutoPlay();
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* HEADER */}
      <div className="container mx-auto px-4 text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
          Our Recent Work
        </h2>
        <p className="text-xl sm:text-xl text-white/60 max-w-2xl mx-auto">
          Explore our portfolio of stunning interiors and architectural
          masterpieces
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative flex items-center justify-center h-[340px] sm:h-[420px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-50 p-3 sm:p-4 rounded-full 
                     bg-black/40 sm:bg-white/10 backdrop-blur-md 
                     border border-white/20 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-50 p-3 sm:p-4 rounded-full 
                     bg-black/40 sm:bg-white/10 backdrop-blur-md 
                     border border-white/20 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* IMAGES CONTAINER */}
        <div className="relative w-full max-w-6xl flex items-center justify-center pointer-events-none">
          {galleryImages.map((img, index) => {
            const offset = index - active;

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer pointer-events-auto"
                onClick={() => {
                  setActive(index);
                  startAutoPlay();
                }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 50) handlePrev();
                  if (info.offset.x < -50) handleNext();
                }}
                animate={{
                  x: offset * (isMobile ? 140 : 220),
                  scale: offset === 0 ? 1.05 : isMobile ? 0.7 : 0.75,
                  opacity: Math.abs(offset) > 2 ? 0 : offset === 0 ? 1 : 0.4,
                  zIndex: offset === 0 ? 10 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-[220px] h-[300px] sm:w-[300px] sm:h-[380px] object-cover rounded-2xl"
                  style={{
                    filter: offset === 0 ? "none" : "blur(2px)",
                    boxShadow:
                      offset === 0 ? "0px 20px 60px rgba(0,0,0,0.6)" : "none",
                    border:
                      offset === 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  }}
                  whileHover={offset === 0 ? { scale: 1.08 } : {}}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
