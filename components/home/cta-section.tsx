import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance">
          From concept to execution, Towny Studio brings clarity, creativity, and control to the entire design process. Let&apos;s create something enduring together.
        </p>
        <Button asChild size="lg" className="rounded-full text-lg px-8">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
}