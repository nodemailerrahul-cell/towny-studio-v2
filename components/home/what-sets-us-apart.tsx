'use client';

import { MapPin, Home, ShieldCheck, Droplet, Users, Award, Banknote, Lock, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MapPin,
    title: 'Local & Pan-India Expertise',
    description: 'Local Bengaluru expertise with pan-India project experience.',
  },
  {
    icon: Home,
    title: 'Single-Point Responsibility',
    description: 'Complete responsibility for both architecture and interiors.',
  },
  {
    icon: ShieldCheck,
    title: '15-Year Warranty',
    description: '15-year material warranty + 24 months free service on Interior.',
  },
  {
    icon: Droplet,
    title: 'Waterproof Assurance',
    description: '10 Years of Waterproof Assurance for Your Home.',
  },
  {
    icon: Users,
    title: 'No Subcontracting',
    description: 'A Team of Experienced professionals Dedicated to Excellence.',
  },
  {
    icon: Award,
    title: 'Lasting Quality',
    description: 'Our Quality work ensures your home lasts for years.',
  },
  {
    icon: Banknote,
    title: 'No Hidden Charges',
    description: 'Clear, Honest Pricing, No Hidden Charges Involved.',
  },
  {
    icon: Lock,
    title: 'Money Safety',
    description: 'Escrow Account for every Project ensuring your money is safe.',
  },
  {
    icon: Building2,
    title: 'Proven Track Record',
    description: 'Trusted by builders like Prestige, Sobha, Brigade, Sattva.',
  },
];

export function WhatSetsUsApart() {
  return (
    <section className="py-20 lg:py-32 bg-zinc-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, transparency, and excellence in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-2xl bg-black border border-white/10 hover:border-primary/50 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
