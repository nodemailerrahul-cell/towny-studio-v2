'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Design Street, Creative City, IN 400001',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@townystudio.com',
    link: 'mailto:hello@townystudio.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

type ContactInfoProps = {
  shouldReduceMotion: boolean;
};

export function ContactInfo({ shouldReduceMotion }: ContactInfoProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="bg-card border border-white/10 rounded-3xl p-8 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-white/70 text-sm">{info.content}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}