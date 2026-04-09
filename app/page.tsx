import { HeroCarousel } from '@/components/hero-carousel'
import { Marquee } from '@/components/marquee'
import { Packages } from '@/components/packages'
import { ImageGallery } from '@/components/image-gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Award, Users, Building2, Sparkles } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Modern living room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Contemporary kitchen' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Luxury bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Minimalist bathroom' },
  { src: 'https://images.unsplash.com/photo-1600573472556-e636b90f7e09?w=800&q=80', alt: 'Elegant dining room' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', alt: 'Modern office space' },
]

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '350+', label: 'Happy Clients' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Sparkles, value: '15+', label: 'Years Experience' },
]

const marqueeItems = [
  'Interior Design',
  'Architecture',
  'Space Planning',
  'Project Management',
  '3D Visualization',
  'Luxury Homes',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Marquee */}
      <Marquee items={marqueeItems} className="py-12 border-y border-white/10" />

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-white/60">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
                Crafting Spaces That Tell Your Story
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                At Towny Studio, we believe that every space has a story to tell. Our team of expert designers and architects work closely with you to transform your vision into reality, creating environments that are both beautiful and functional.
              </p>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                With over 15 years of experience and 500+ successful projects, we bring creativity, precision, and passion to every design challenge.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                alt="Design team at work"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
              Our Recent Work
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance">
              Explore our portfolio of stunning interiors and architectural masterpieces
            </p>
          </div>
          <ImageGallery images={galleryImages} autoplay />
        </div>
      </section>

      {/* Packages */}
      <Packages />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            {'Let\'s bring your vision to life. Contact us today for a free consultation.'}
          </p>
          <Button asChild size="lg" className="rounded-full text-lg px-8">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
