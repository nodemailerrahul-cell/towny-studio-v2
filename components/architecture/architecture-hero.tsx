"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactModal } from "@/components/contact/contact-modal";

type ArchitectureHeroProps = {
  shouldReduceMotion: boolean;
};

export function ArchitectureHero({
  shouldReduceMotion,
}: ArchitectureHeroProps) {
  const heading = "Designing Spaces That Endure";

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-32 lg:py-40">

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight flex flex-wrap justify-center gap-x-3"
          >
            {heading.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-xl text-white/75 mb-8 leading-relaxed text-balance">
            At <span className="text-white font-medium">Towny Studio</span>, we approach architecture and interiors as one cohesive discipline.
            From early concept and spatial strategy to detailed design and on-site execution,
            every decision is intentional. Our work prioritizes climate responsiveness,
            material integrity, and long-term performance—creating environments that are as
            functional as they are timeless.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactModal>
              <Button asChild size="lg" className="rounded-full text-lg px-8">
                <Link href="#">Start a Conversation</Link>
              </Button>
            </ContactModal>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8 border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/interior">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}