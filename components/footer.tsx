import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Towny Studio – Home"
              className="inline-block mb-5 group"
            >
              <Image
                src="/logo.png"
                alt="Towny Studio – Architect | Interior | Life Style"
                width={700}
                height={700}
                className="h-24 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <p className="text-white/60 mb-6 leading-relaxed text-lg">
              Interior | Architecture | Life Style
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com/townystudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/townystudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/interior"
                  className="text-white/60 hover:text-primary"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture"
                  className="text-white/60 hover:text-primary"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ NEW: Packages Section */}
          <div>
            <h4 className="font-bold mb-4">Packages</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/architecture"
                  className="text-white/60 hover:text-primary"
                >
                  Basic Package
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture"
                  className="text-white/60 hover:text-primary"
                >
                  Standard Package
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture"
                  className="text-white/60 hover:text-primary"
                >
                  Premium Package
                </Link>
              </li>
              <li>
                <Link
                  href="/architecture"
                  className="text-white/60 hover:text-primary"
                >
                  Luxury Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-lg leading-relaxed">
                  18/1, Wellington Street Shanthinagar,
                  <br />
                  Langford Gardens, Bengaluru,
                  <br />
                  Karnataka 560025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60 text-lg leading-relaxed">
                  4th Floor, Gaurav building,
                  <br />
                  157/1, Manipal County Rd, above Domino's Pizza, AECS C Block,
                  <br />
                  Singasandra, Bengaluru, Karnataka 560114
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919741523637"
                    className="text-white/60 hover:text-primary"
                  >
                    +91 97415 23637
                  </a>
                  <a
                    href="tel:+919741252425"
                    className="text-white/60 hover:text-primary"
                  >
                    +91 97412 52425
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:Connect@townystudio.com"
                  className="text-white/60 hover:text-primary"
                >
                  Connect@townystudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-lg text-white/50 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Towny Studio. All rights reserved.
          </p>

          <p className="text-sm text-white/40">
            Designed, Developed and Maintained by{" "}
            <a
              href="https://quantech.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Quantech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
