"use client";

import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your vision, lifestyle, and requirements through an in-depth consultation.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Our team creates initial concepts with mood boards, sketches, and 3D visualizations.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "We refine the chosen concept, select materials, and create detailed plans.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our expert team brings the design to life with precision and attention to detail.",
  },
  {
    number: "05",
    title: "Final Reveal",
    description:
      "We walk you through your transformed space, ensuring every detail exceeds expectations.",
  },
];

type InteriorProcessProps = {
  shouldReduceMotion: boolean;
};

export function InteriorProcess({ shouldReduceMotion }: InteriorProcessProps) {
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
            Our Design Process
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            A streamlined approach from concept to completion
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-serif font-bold text-primary/20 shrink-0">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
