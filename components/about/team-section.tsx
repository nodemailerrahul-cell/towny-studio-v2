"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Arjun Malhotra",
    role: "Principal Architect",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Lead Interior Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Senior Designer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Neha Gupta",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

type TeamSectionProps = {
  shouldReduceMotion: boolean;
};

export function TeamSection({ shouldReduceMotion }: TeamSectionProps) {
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
            Meet Our Team
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
              }}
              className="text-center"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
