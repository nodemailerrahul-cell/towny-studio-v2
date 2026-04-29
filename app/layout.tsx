import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Serif, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BsWhatsapp } from 'react-icons/bs'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexSerif = IBM_Plex_Serif({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const merriweather = Merriweather({ 
  subsets: ["latin"],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.townystudio.com'),
  title: {
    default: 'Towny Studio - Architecture & Interior Design | Bengaluru',
    template: '%s | Towny Studio'
  },
  description: 'Towny Studio is a multidisciplinary design practice integrating architecture and interior design. Rooted in minimalism, we deliver elegant, functional, and timeless spaces in Bengaluru.',
  keywords: [
    'Architecture', 
    'Interior Design', 
    'Bengaluru Architects', 
    'Minimalist Design', 
    'Luxury Interiors', 
    'Towny Studio',
    'Residential Architecture',
    'Commercial Interiors'
  ],
  authors: [{ name: 'Towny Studio', url: 'https://www.townystudio.com' }],
  creator: 'Towny Studio',
  publisher: 'Towny Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.townystudio.com',
    title: 'Towny Studio - Architecture & Interior Design',
    description: 'Towny Studio is a multidisciplinary design practice integrating architecture and interior design. Rooted in minimalism, we deliver elegant, functional, and timeless spaces in Bengaluru.',
    siteName: 'Towny Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Towny Studio - Architecture & Interior Design',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Towny Studio - Architecture & Interior Design',
    description: 'Towny Studio is a multidisciplinary design practice integrating architecture and interior design. Rooted in minimalism, we deliver elegant, functional, and timeless spaces in Bengaluru.',
    creator: '@townystudio',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Towny Studio',
  appleWebApp: {
    capable: true,
    title: 'Towny Studio',
    statusBarStyle: 'default',
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} ${merriweather.variable} font-sans antialiased bg-black text-white`}>
        <Navigation />
        {children}
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300"
          style={{ boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
          <BsWhatsapp size={28} />
        </a>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
