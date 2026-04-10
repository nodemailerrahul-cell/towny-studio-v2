'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

// ---------------- HERO CONTAINER ----------------
export function Hero({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden',
        className
      )}
    >
      {children}
    </section>
  );
}

// ---------------- BACKGROUND GRADIENT ----------------
export function BgGradient() {
  return (
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
  );
}

// ---------------- TEXT STAGGER ANIMATION ----------------
export function TextStagger({
  text,
  className,
  stagger = 0.04,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.h1
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// ---------------- CONTENT ANIMATION ----------------
export function AnimatedContainer({
  children,
  className,
  delay = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}