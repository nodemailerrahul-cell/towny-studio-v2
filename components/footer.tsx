import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            {/* Logo */}
            <Link href="/" aria-label="Towny Studio – Home" className="inline-block mb-5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_white.jpeg"
                alt="Towny Studio – Architect | Interior | Life Style"
                width={160}
                height={64}
                className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              A multidisciplinary design practice integrating architecture and interior design. Rooted in minimalism, we deliver elegant, functional, and timeless spaces.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/interior" className="text-white/60 hover:text-primary transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="text-white/60 hover:text-primary transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Residential Villas</li>
              <li className="text-white/60">Luxury Apartments</li>
              <li className="text-white/60">Commercial Offices</li>
              <li className="text-white/60">Retail Spaces</li>
              <li className="text-white/60">Hospitality Environments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  18/1, Wellington Street Shanthinagar,<br />
                  Langford Gardens, Bengaluru,<br />
                  Karnataka 560025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919741523637" className="text-white/60 text-sm hover:text-primary transition-colors">
                    +91 97415 23637
                  </a>
                  <a href="tel:+919741252425" className="text-white/60 text-sm hover:text-primary transition-colors">
                    +91 97412 52425
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Connect@townystudio.com" className="text-white/60 text-sm hover:text-primary transition-colors">
                  Connect@townystudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Towny Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
