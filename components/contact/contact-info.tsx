'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Studio',
    content: 'Bengaluru, Karnataka, India',
    detail: 'Schedule a visit to discuss your project in person',
    link: null,
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 98765 43210',
    detail: 'Speak directly with our design team',
    link: 'tel:+919876543210',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@townystudio.com',
    detail: 'We respond within 24 hours',
    link: 'mailto:hello@townystudio.com',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/40',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon – Sat: 9:00 AM – 6:00 PM',
    detail: 'Sunday by appointment only',
    link: null,
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
  },
];

type ContactInfoProps = {
  shouldReduceMotion: boolean;
};

export function ContactInfo({ shouldReduceMotion }: ContactInfoProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isClickable = !!info.link;
            const Wrapper = isClickable ? 'a' : 'div';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                }}
              >
                <Wrapper
                  {...(isClickable ? { href: info.link! } : {})}
                  className={`group relative block bg-card border border-white/[0.07] rounded-2xl p-7 transition-all duration-300 ${info.borderColor} hover:bg-white/[0.02]`}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors`}>
                      <Icon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    {isClickable && (
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>

                  <h3 className="font-semibold text-white/90 mb-1.5 text-[15px]">
                    {info.title}
                  </h3>
                  <p className={`text-base font-medium mb-2 ${isClickable ? 'text-white group-hover:text-primary transition-colors' : 'text-white/80'}`}>
                    {info.content}
                  </p>
                  <p className="text-xs text-white/40">
                    {info.detail}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}