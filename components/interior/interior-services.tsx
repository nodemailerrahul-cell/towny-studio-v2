"use client";

import { motion } from "framer-motion";
import {
  Home,
  Utensils,
  BedDouble,
  ShowerHead,
  Sofa,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Living Rooms",
    description:
      "Create welcoming spaces where memories are made and stories are shared.",
  },
  {
    icon: Utensils,
    title: "Kitchens",
    description:
      "Functional yet beautiful kitchens that inspire culinary creativity.",
  },
  {
    icon: BedDouble,
    title: "Bedrooms",
    description: "Serene sanctuaries designed for rest and rejuvenation.",
  },
  {
    icon: ShowerHead,
    title: "Bathrooms",
    description: "Spa-like retreats that blend luxury with practicality.",
  },
  {
    icon: Sofa,
    title: "Home Offices",
    description:
      "Productive workspaces that balance comfort and professionalism.",
  },
  {
    icon: Building,
    title: "Commercial",
    description: "Dynamic interiors that enhance your brand and business.",
  },
];

type InteriorServicesProps = {
  shouldReduceMotion: boolean;
};

export function InteriorServices({
  shouldReduceMotion,
}: InteriorServicesProps) {
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
            Our Interior Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Comprehensive design solutions for every space in your home or
            office
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
                className="bg-card border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
