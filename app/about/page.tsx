'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Footer } from '@/components/footer'
import { Award, Heart, Target, Users, Lightbulb, Zap } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our hearts into every project, treating each space as if it were our own.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail ensures every element is perfectly executed.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge design trends while respecting timeless aesthetics.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your vision guides our creativity in a true partnership approach.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We set the highest standards and consistently exceed expectations.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Streamlined processes ensure timely delivery without compromising quality.',
  },
]

const team = [
  {
    name: 'Arjun Malhotra',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Vikram Singh',
    role: 'Senior Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  },
  {
    name: 'Neha Gupta',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance">
              Where Design Meets Purpose
            </h1>
            <p className="text-xl text-white/70 leading-relaxed text-balance">
              For over 15 years, Towny Studio has been at the forefront of innovative interior design and architecture, creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
                Our Story
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Founded in 2009 by a group of passionate architects and designers, Towny Studio began with a simple vision: to create spaces that enhance the way people live and work.
              </p>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                What started as a small studio has grown into a full-service design firm, but our core values remain unchanged. We believe in the power of thoughtful design to transform lives, inspire creativity, and create lasting value.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Today, with over 500 completed projects and 25+ industry awards, we continue to push the boundaries of what design can achieve.
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
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Studio workspace"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className="bg-card border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="text-center"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
