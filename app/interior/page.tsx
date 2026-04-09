'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Footer } from '@/components/footer'
import { ImageGallery } from '@/components/image-gallery'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, Utensils, BedDouble, ShowerHead, Sofa, Building } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Living Rooms',
    description: 'Create welcoming spaces where memories are made and stories are shared.',
  },
  {
    icon: Utensils,
    title: 'Kitchens',
    description: 'Functional yet beautiful kitchens that inspire culinary creativity.',
  },
  {
    icon: BedDouble,
    title: 'Bedrooms',
    description: 'Serene sanctuaries designed for rest and rejuvenation.',
  },
  {
    icon: ShowerHead,
    title: 'Bathrooms',
    description: 'Spa-like retreats that blend luxury with practicality.',
  },
  {
    icon: Sofa,
    title: 'Home Offices',
    description: 'Productive workspaces that balance comfort and professionalism.',
  },
  {
    icon: Building,
    title: 'Commercial',
    description: 'Dynamic interiors that enhance your brand and business.',
  },
]

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Modern living room with minimalist design' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Contemporary kitchen with marble countertops' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Luxury master bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Minimalist bathroom design' },
  { src: 'https://images.unsplash.com/photo-1600573472556-e636b90f7e09?w=800&q=80', alt: 'Elegant dining room' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', alt: 'Modern office interior' },
  { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80', alt: 'Cozy reading nook' },
  { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80', alt: 'Contemporary living space' },
  { src: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80', alt: 'Luxury kitchen island' },
]

const process = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We start by understanding your vision, lifestyle, and requirements through an in-depth consultation.',
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Our team creates initial concepts with mood boards, sketches, and 3D visualizations.',
  },
  {
    number: '03',
    title: 'Design Development',
    description: 'We refine the chosen concept, select materials, and create detailed plans.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Our expert team brings the design to life with precision and attention to detail.',
  },
  {
    number: '05',
    title: 'Final Reveal',
    description: 'We walk you through your transformed space, ensuring every detail exceeds expectations.',
  },
]

export default function InteriorPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Interior design"
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
              Interior Design Excellence
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed text-balance">
              Transform your space into a reflection of your personality and lifestyle with our expert interior design services.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/contact">Start Your Project</Link>
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
              Our Interior Services
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Comprehensive design solutions for every space in your home or office
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

      {/* Process */}
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
              Our Design Process
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              A streamlined approach from concept to completion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="text-6xl font-serif font-bold text-primary/20 shrink-0">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
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
              Interior Portfolio
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Explore our collection of beautifully designed interiors
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
              {'Let\'s Create Something Beautiful'}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance">
              Ready to transform your interior? Contact us for a consultation.
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
