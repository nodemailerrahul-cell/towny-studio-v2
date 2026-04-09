'use client'

import { useReducedMotion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block"
        style={{
          animation: shouldReduceMotion ? 'none' : 'marquee 30s linear infinite',
        }}
      >
        {items.concat(items).map((item, index) => (
          <span key={index} className="inline-block px-8 text-2xl md:text-4xl font-serif font-bold text-white/20">
            {item} •
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
