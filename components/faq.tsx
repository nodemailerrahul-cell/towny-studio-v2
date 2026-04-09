'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What services does Towny Studio offer?',
    answer: 'We offer comprehensive interior design and architecture services including residential design, commercial spaces, space planning, 3D visualization, and complete project management from concept to completion.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A residential interior design project typically takes 8-12 weeks, while larger commercial or architectural projects may take 3-6 months. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you work on both residential and commercial projects?',
    answer: 'Yes, we specialize in both residential and commercial projects. Our portfolio includes luxury homes, apartments, offices, retail spaces, restaurants, and hospitality projects.',
  },
  {
    question: 'What is included in your design packages?',
    answer: 'Our packages include 2D/3D floor plans, elevation drawings, electrical and plumbing drawings, civil construction specifications, premium materials, modular kitchen and bathroom fittings, flooring, and complete project supervision.',
  },
  {
    question: 'How does the design process work?',
    answer: 'We start with an initial consultation to understand your vision, followed by concept development, 3D visualization, material selection, detailed planning, and finally execution with regular updates throughout the project.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We typically work with a milestone-based payment structure: 20% on signing, 30% on design approval, 40% during execution phases, and 10% on project completion. Custom payment plans can be discussed.',
  },
]

export function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-white/10 rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
