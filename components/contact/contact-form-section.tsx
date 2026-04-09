'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';

type ContactFormSectionProps = {
  shouldReduceMotion: boolean;
};

export function ContactFormSection({ shouldReduceMotion }: ContactFormSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (you can later connect to backend or form service)
    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="bg-card border-white/10 rounded-full"
                />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-card border-white/10 rounded-full"
                />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-card border-white/10 rounded-full"
                />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="service">Service Interested In</FieldLabel>
                <select
                  id="service"
                  className="w-full h-10 px-4 bg-card border border-white/10 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="interior">Interior Design</option>
                  <option value="architecture">Architecture</option>
                  <option value="both">Both</option>
                  <option value="consultation">Consultation</option>
                </select>
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-card border-white/10 rounded-3xl resize-none"
                />
              </Field>
            </FieldGroup>

            <Button type="submit" size="lg" className="w-full rounded-full">
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Studio Visit / Map Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="relative"
        >
          <div className="sticky top-24">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">
              Visit Our Studio
            </h2>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Our studio"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Our studio is located in the heart of the creative district, easily accessible and designed to inspire. Schedule a visit to discuss your project over coffee in our design-forward space.
            </p>
            <p className="text-white/70 leading-relaxed">
              <strong className="text-white">Parking:</strong> Free parking available on premises
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}