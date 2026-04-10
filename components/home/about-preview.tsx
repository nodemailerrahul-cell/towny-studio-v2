import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Where Architecture Meets Interior Design
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Towny Studio is a multidisciplinary design practice that seamlessly integrates architecture and interior design to deliver complete, cohesive building solutions. Rooted in a minimalistic design philosophy, our work emphasizes clarity, balance, and purposeful simplicity.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Every space we create reflects the lifestyle, aspirations, and identity of its users — designed with a deep understanding of Bengaluru&apos;s unique climate, urban fabric, and construction challenges.
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
  );
}