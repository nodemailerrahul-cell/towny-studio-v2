'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2, Home, Building2, Palette, MessageSquare } from 'lucide-react';

type ContactFormSectionProps = {
  shouldReduceMotion: boolean;
};

const serviceOptions = [
  { id: 'residential', label: 'Residential Villa', icon: Home },
  { id: 'commercial', label: 'Commercial Office', icon: Building2 },
  { id: 'interior', label: 'Interior Design', icon: Palette },
  { id: 'consultation', label: 'Consultation', icon: MessageSquare },
];

export function ContactFormSection({ shouldReduceMotion }: ContactFormSectionProps) {
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div id="contact-form" className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">
          Start a Conversation
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
          Tell Us About Your Project
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto">
          Share your vision, and we&apos;ll craft a design that speaks your language.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left – Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service selection chips */}
            <div>
              <label className="block text-sm font-medium text-white/60 mb-3">
                What are you looking for?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = selectedService === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.id)}
                      className={`group flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-300 ${
                        active
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-white/[0.07] bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white/80'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        active ? 'bg-primary/20' : 'bg-white/[0.04] group-hover:bg-white/[0.06]'
                      }`}>
                        <Icon className={`w-4 h-4 transition-colors ${active ? 'text-primary' : 'text-white/40 group-hover:text-white/60'}`} />
                      </div>
                      <span className="text-sm font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            {/* Phone + Budget row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white/60 mb-2">
                  Approximate Budget
                </label>
                <select
                  id="budget"
                  className="w-full h-12 px-4 bg-white/[0.03] border border-white/[0.07] rounded-xl text-white/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 focus:bg-white/[0.05] transition-all appearance-none"
                >
                  <option value="" className="bg-zinc-900">Select range</option>
                  <option value="25-50" className="bg-zinc-900">₹25L – ₹50L</option>
                  <option value="50-1cr" className="bg-zinc-900">₹50L – ₹1Cr</option>
                  <option value="1cr-2cr" className="bg-zinc-900">₹1Cr – ₹2Cr</option>
                  <option value="2cr+" className="bg-zinc-900">₹2Cr+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                Tell Us More
              </label>
              <Textarea
                id="message"
                placeholder="Describe your project vision, timeline, site location, or any specific requirements..."
                rows={5}
                required
                className="bg-white/[0.03] border-white/[0.07] rounded-xl text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto rounded-xl px-10 h-13 text-base font-semibold gap-2 group"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>

        {/* Right – Studio Visit */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="lg:col-span-2"
        >
          <div className="sticky top-28 space-y-6">
            {/* Studio image */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Towny Studio workspace"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-1">Our Studio</p>
                <p className="text-white font-semibold">Bengaluru, Karnataka</p>
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 space-y-5">
              <h3 className="font-semibold text-white/90">Why Visit Our Studio?</h3>
              <ul className="space-y-3">
                {[
                  'Walk through our material library & finish samples',
                  'Review 3D visualizations on our large displays',
                  'Meet the architects and designers in person',
                  'Discuss your vision over a cup of coffee',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 px-5 py-4 bg-primary/[0.06] border border-primary/20 rounded-2xl">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-primary animate-ping absolute inset-0" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Quick Response</p>
                <p className="text-xs text-white/40">We typically respond within 2–4 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}