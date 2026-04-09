'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Footer } from '@/components/footer'
import { ImageGallery } from '@/components/image-gallery'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Home, Store, Hotel, TreePine, Ruler } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Architecture',
    description: 'Custom homes designed to reflect your lifestyle and enhance your living experience.',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    description: 'Functional and aesthetic commercial spaces that drive business success.',
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    description: 'Dynamic retail environments that enhance customer experience and brand identity.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Hotels and restaurants designed to create memorable guest experiences.',
  },
  {
    icon: TreePine,
    title: 'Landscape Architecture',
    description: 'Outdoor spaces that harmonize with built environments and nature.',
  },
  {
    icon: Ruler,
    title: 'Renovation & Restoration',
    description: 'Breathing new life into existing structures while preserving their character.',
  },
]

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', alt: 'Modern residential architecture' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Contemporary villa design' },
  { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80', alt: 'Commercial building facade' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Luxury home exterior' },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', alt: 'Modern office building' },
  { src: 'https://images.unsplash.com/photo-1600585152220-90363f7e65f7?w=800&q=80', alt: 'Residential complex' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', alt: 'Contemporary architecture' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Minimalist design' },
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80', alt: 'Architectural detail' },
]

const expertise = [
  {
    title: 'Site Analysis',
    description: 'Comprehensive evaluation of site conditions, orientation, and environmental factors.',
  },
  {
    title: 'Conceptual Design',
    description: 'Creative concepts that balance aesthetics, functionality, and sustainability.',
  },
  {
    title: 'Technical Drawings',
    description: 'Detailed architectural plans, elevations, and sections for construction.',
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic renderings to help you visualize the final outcome.',
  },
  {
    title: 'Structural Engineering',
    description: 'Integrated structural solutions ensuring safety and longevity.',
  },
  {
    title: 'Project Management',
    description: 'End-to-end coordination from design approval to final handover.',
  },
]

export default function ArchitecturePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1920&q=80"
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance">
              Architectural Innovation
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed text-balance">
              Designing structures that inspire, innovate, and stand the test of time through thoughtful architectural solutions.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Architectural Services
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Comprehensive architectural solutions for diverse project types
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className="bg-card border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
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
              Our Expertise
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Comprehensive capabilities to bring your architectural vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="bg-card border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
                Our Design Philosophy
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                We believe architecture should do more than shelter—it should inspire. Every project begins with understanding the unique context: the site, the climate, the culture, and most importantly, the people who will inhabit the space.
              </p>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Our designs balance timeless aesthetics with modern functionality, creating buildings that are both beautiful and sustainable. We embrace innovation while respecting tradition, always striving for harmony between built form and natural environment.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Through meticulous attention to detail and collaborative design process, we create architecture that stands as a testament to thoughtful, purposeful design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Architectural drawing"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
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
              Architecture Portfolio
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Explore our architectural achievements and innovative designs
            </p>
          </motion.div>

          <ImageGallery images={portfolioImages} autoplay />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Build Your Vision With Us
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance">
              {'Let\'s collaborate to create architectural excellence that inspires.'}
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
