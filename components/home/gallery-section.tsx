import { ImageGallery } from '@/components/image-gallery';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', alt: 'Modern living room' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Contemporary kitchen' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Luxury bedroom' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Minimalist bathroom' },
  { src: 'https://images.unsplash.com/photo-1600573472556-e636b90f7e09?w=800&q=80', alt: 'Elegant dining room' },
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', alt: 'Modern office space' },
];

export function GallerySection() {
  return (
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
  );
}