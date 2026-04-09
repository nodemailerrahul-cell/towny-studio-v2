'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Target, Users, Lightbulb, Zap } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Passion', description: 'We pour our hearts into every project, treating each space as if it were our own.' },
  { icon: Target, title: 'Precision', description: 'Meticulous attention to detail ensures every element is perfectly executed.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace cutting-edge design trends while respecting timeless aesthetics.' },
  { icon: Users, title: 'Collaboration', description: 'Your vision guides our creativity in a true partnership approach.' },
  { icon: Award, title: 'Excellence', description: 'We set the highest standards and consistently exceed expectations.' },
  { icon: Zap, title: 'Efficiency', description: 'Streamlined processes ensure timely delivery without compromising quality.' },
];

type CoreValuesProps = {
  shouldReduceMotion: boolean;
};

export function CoreValues({ shouldReduceMotion }: CoreValuesProps) {
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
            Our Core Values
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="bg-card border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}