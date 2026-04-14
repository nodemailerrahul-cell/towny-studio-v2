"use client";

import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Homeowner",
    text: "Towny Studio transformed our home into a masterpiece. Their attention to detail and understanding of our vision was exceptional.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    text: "The commercial space they designed for us is not just beautiful, it's functional and has significantly improved our business image.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    role: "Architect",
    text: "Working with Towny Studio was a pleasure. Their professionalism and creative approach to design is truly inspiring.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Restaurant Owner",
    text: "They completely reimagined our restaurant space. The ambiance they created has been a huge draw for our customers.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Interior Enthusiast",
    text: "From concept to execution, every step was seamless. Our living room is now the highlight of our home.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Tech CEO",
    text: "Our new office space perfectly reflects our brand. The team at Towny understood exactly what we needed.",
    rating: 5,
  },
];

function TestimonialsColumn({
  className,
  testimonials,
  duration = 12,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border bg-card shadow-lg shadow-primary/10 max-w-xs"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg opacity-80 leading-relaxed">{t.text}</p>

                {/* User */}
                <div className="flex items-center gap-3 mt-5">
                  {/* Letter Avatar */}
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-medium leading-tight">{t.name}</p>
                    <p className="text-xs opacity-60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-balance">
            Don&apos;t just take our word for it — hear from our satisfied
            clients
          </p>
        </div>
        <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn
            testimonials={testimonials.slice(0, 2)}
            duration={15}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(2, 4)}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={testimonials.slice(4, 6)}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
