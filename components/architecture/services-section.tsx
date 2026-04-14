"use client";

import { motion } from "framer-motion";
import { Building2, Home, Store, Hotel, TreePine, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Villas",
    description:
      "Custom-designed villas that balance minimalism with functionality, reflecting the lifestyle and identity of each homeowner.",
  },
  {
    icon: Building2,
    title: "Luxury Apartments",
    description:
      "Refined apartment interiors and architecture with clean lines, thoughtful material selection, and purposeful simplicity.",
  },
  {
    icon: Store,
    title: "Commercial Offices",
    description:
      "Workspaces designed to be efficient, climate-responsive, and built to perform — tailored to your brand and business needs.",
  },
  {
    icon: Hotel,
    title: "Hospitality Environments",
    description:
      "Hotels, restaurants, and hospitality spaces that deliver memorable experiences through cohesive design.",
  },
  {
    icon: TreePine,
    title: "Retail Spaces",
    description:
      "Dynamic retail environments that balance refined aesthetics with functional design and brand identity.",
  },
  {
    icon: Ruler,
    title: "Renovation & Restoration",
    description:
      "Breathing new life into existing structures while maintaining design integrity and attention to detail.",
  },
];

type ServicesSectionProps = {
  shouldReduceMotion: boolean;
};

export function ServicesSection({ shouldReduceMotion }: ServicesSectionProps) {
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
            Architectural Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            We specialize in residential villas, luxury apartments, commercial
            offices, retail spaces, and hospitality environments
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
