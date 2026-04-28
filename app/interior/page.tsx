"use client";

import { useReducedMotion } from "framer-motion";

import { InteriorHero } from "@/components/interior/interior-hero";
import { InteriorServices } from "@/components/interior/interior-services";
import { InteriorProcess } from "@/components/interior/interior-process";
import { InteriorPortfolio } from "@/components/interior/interior-portfolio";
import { InteriorCta } from "@/components/interior/interior-cta";
import { FAQ, type FAQItem } from "@/components/faq";

const interiorFaqs: FAQItem[] = [
  {
    question: "Does Towny Studio charge taxes?",
    answer: "No additional taxes are charged. All prices are inclusive of GST, ensuring complete transparency with no hidden costs.",
  },
  {
    question: "What makes Towny Studio unique compared to other builders?",
    answer: "We offer escrow-based payments for transparency, strict quality checks, guaranteed timely delivery, and no hidden charges or unexpected cost escalations.",
  },
  {
    question: "Does Towny Studio require an advance payment?",
    answer: "Yes, a booking amount of 2% of the total construction cost is required. This includes surveys, soil testing, and initial floor plan creation.",
  },
  {
    question: "How does the payment schedule work?",
    answer: "Payments are made in stages: 2% booking, 8% after floor plan finalization, 15% during plinth stage, and the remaining amount is paid in construction milestones.",
  },
  {
    question: "What is the estimated timeline for house construction?",
    answer: "Construction typically takes 6 to 14 months depending on size, design, location, and construction type. Progress can be tracked via the customer app.",
  },
  {
    question: "What should I consider when choosing a builder?",
    answer: "Key factors include credibility checks, transparency in pricing, systematic processes, real-time updates, and smooth communication throughout the project.",
  },
];

export default function InteriorPage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <InteriorHero shouldReduceMotion={shouldReduceMotion} />
      <InteriorPortfolio shouldReduceMotion={shouldReduceMotion} />
      <InteriorServices shouldReduceMotion={shouldReduceMotion} />
      <InteriorProcess shouldReduceMotion={shouldReduceMotion} />
      <FAQ faqs={interiorFaqs} />
      <InteriorCta shouldReduceMotion={shouldReduceMotion} />
    </main>
  );
}
