'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Plus } from 'lucide-react'

export type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'What services does Towny Studio offer?',
    answer:
      'We offer comprehensive interior design and architecture services including residential design, commercial spaces, space planning, 3D visualization, and complete project management.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Residential projects take 8–12 weeks, while larger commercial projects take 3–6 months depending on scope.',
  },
  {
    question: 'Do you work on both residential and commercial projects?',
    answer:
      'Yes, we specialize in luxury homes, apartments, offices, retail, and hospitality spaces.',
  },
  {
    question: 'What is included in your design packages?',
    answer:
      '2D/3D plans, drawings, material selection, modular setups, and full execution supervision.',
  },
  {
    question: 'How does the design process work?',
    answer:
      'Consultation → Concept → 3D → Planning → Execution with continuous updates.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      '20% upfront, 30% design approval, 40% execution, 10% completion.',
  },
]


export function FAQ({ faqs: customFaqs }: FAQProps = {}) {
  const shouldReduceMotion = useReducedMotion()

  // 🎯 Cursor glow handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty('--x')
    e.currentTarget.style.removeProperty('--y')
  }

  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to know about working with our studio
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
          }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {(customFaqs || defaultFaqs).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 data-[state=open]:border-primary/40"
              >

                {/* ✨ Cursor Glow Layer */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-data-[state=open]:opacity-100"
                  style={{
                    background: `
                      radial-gradient(
                        250px circle at var(--x, 50%) var(--y, 50%),
                        rgba(255,255,255,0.12),
                        rgba(255,255,255,0.04) 40%,
                        transparent 70%
                      )
                    `,
                  }}
                />

                <AccordionTrigger className="flex items-center gap-4 py-6 px-6 text-left font-medium text-white hover:no-underline">
                  
                  {/* Icon */}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-transform duration-300 group-data-[state=open]:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>

                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 text-white/70 leading-relaxed">
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