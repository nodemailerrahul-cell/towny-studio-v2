'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'Towny Studio transformed our home into a masterpiece. Their attention to detail and understanding of our vision was exceptional.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'The commercial space they designed for us is not just beautiful, it\'s functional and has significantly improved our business image.',
    rating: 5,
  },
  {
    name: 'Anjali Mehta',
    role: 'Architect',
    content: 'Working with Towny Studio was a pleasure. Their professionalism and creative approach to design is truly inspiring.',
    rating: 5,
  },
]

export function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
            {'Don\'t just take our word for it - hear from our satisfied clients'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              className="bg-card border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
