'use client';

import { motion } from 'framer-motion';

const expertise = [
  { title: 'Site Analysis', description: 'Comprehensive evaluation of site conditions, orientation, and environmental factors.' },
  { title: 'Conceptual Design', description: 'Creative concepts that balance aesthetics, functionality, and sustainability.' },
  { title: 'Technical Drawings', description: 'Detailed architectural plans, elevations, and sections for construction.' },
  { title: '3D Visualization', description: 'Photorealistic renderings to help you visualize the final outcome.' },
  { title: 'Structural Engineering', description: 'Integrated structural solutions ensuring safety and longevity.' },
  { title: 'Project Management', description: 'End-to-end coordination from design approval to final handover.' },
];

type ExpertiseSectionProps = {
  shouldReduceMotion: boolean;
};

export function ExpertiseSection({ shouldReduceMotion }: ExpertiseSectionProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Our Expertise
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Comprehensive capabilities to bring your architectural vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}