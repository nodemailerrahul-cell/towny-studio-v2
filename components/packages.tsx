'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, Crown, Home, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const packages = [
  {
    name: 'Standard',
    price: '₹1,799',
    icon: Home,
    description: 'Perfect for basic requirements, providing essential design services for your dream home.',
    features: [
      '2D Floor Plan',
      'Structural Design',
      'Basic Electrical & Plumbing',
      'Standard Materials',
      'Basic Kitchen & Bathroom',
    ],
  },
  {
    name: 'Premium',
    price: '₹1,960',
    icon: Crown,
    popular: true,
    description: 'Most popular choice with comprehensive design and premium materials.',
    features: [
      '3D Elevation',
      'Electrical & Plumbing Drawings',
      'Premium Materials',
      'Modular Kitchen (₹850/sqft)',
      'Premium Bathroom Fittings',
      'Designer Flooring',
    ],
  },
  {
    name: 'Luxury',
    price: '₹2,400',
    icon: Sparkles,
    description: 'Ultimate luxury package for those seeking the finest in design and materials.',
    features: [
      'Full 3D Visualization',
      'Smart Home Integration',
      'Imported Materials',
      'Premium Kitchen (₹950/sqft)',
      'Luxury Bathroom Suite',
      'Italian Marble Flooring',
      'Landscape Design',
    ],
  },
]

const premiumDetails = {
  sections: [
    {
      title: 'Design & Drawings',
      items: [
        '2D Floor Plan',
        '3D Elevation',
        'Structural Design',
        'Electrical & Plumbing Drawings',
      ],
    },
    {
      title: 'Civil Construction',
      items: [
        'IS Standard (M) Steel',
        'Ultratech / Birla Cement',
        'M sand for Blockwork',
        '6" Finished Ceiling Height',
        'Footing for Blockwork',
      ],
    },
    {
      title: 'Kitchen',
      items: [
        'Premium Cabinet - Hira upto ₹850/sqft',
        'Granite Countertop upto ₹180/sqft',
        'Est Hansa Fittings',
      ],
    },
    {
      title: 'Bathroom',
      items: [
        'Premium Italia upto ₹60/sqft',
        'Concealed EWC',
        'CP & sanitary fittings upto ₹25,000 per toilet',
      ],
    },
    {
      title: 'Flooring',
      items: [
        'Granite/Vitrified Tiles upto ₹80/sqft',
        'Laminate Designer Staircase upto ₹700/sqft',
        'Anti-skid Parking Tiles',
      ],
    },
    {
      title: 'Inclusions',
      items: [
        '2500/- Overhead Tank',
        '8000/L Underground Sump',
        'UPS, Solar & AC provision for rooms',
      ],
    },
  ],
}

export function Packages() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Construction Packages
          </h2>
          <p className="text-lg text-primary mb-12">
            Choose the perfect package for your dream home
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className={`relative bg-card border rounded-3xl p-8 ${
                  pkg.popular
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'border-white/10 hover:border-primary/50'
                } transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {pkg.price} <span className="text-lg text-white/60">/ sqft</span>
                  </p>
                  <p className="text-sm text-white/60">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant={pkg.popular ? 'default' : 'outline'}>
                  Choose Plan
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Premium Package Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="bg-card border border-primary/30 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            Premium Package Details
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumDetails.sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
