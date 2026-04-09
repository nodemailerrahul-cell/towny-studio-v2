import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-white">Towny</span>
              <span className="text-primary"> Studio</span>
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Creating timeless spaces that blend aesthetics with functionality. Your vision, our expertise.
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
              <li className="text-white/60">Residential Design</li>
              <li className="text-white/60">Commercial Spaces</li>
              <li className="text-white/60">Space Planning</li>
              <li className="text-white/60">3D Visualization</li>
              <li className="text-white/60">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  123 Design Street, Creative City, IN 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-white/60 text-sm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@townystudio.com" className="text-white/60 text-sm hover:text-primary transition-colors">
                  hello@townystudio.com
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
