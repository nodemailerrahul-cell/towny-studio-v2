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
  );
}