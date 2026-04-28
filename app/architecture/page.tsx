'use client';

import { useReducedMotion } from 'framer-motion';

import { ArchitectureHero } from '@/components/architecture/architecture-hero';
import { ExpertiseSection } from '@/components/architecture/expertise-section';
import { DesignPhilosophy } from '@/components/architecture/design-philosophy';
import { ArchitectureProjects } from '@/components/architecture/architecture-projects';
// import { ArchitecturePortfolio } from '@/components/architecture/architecture-portfolio';
import { Packages } from '@/components/packages';
import { ArchitectureCta } from '@/components/architecture/architecture-cta';
import { FAQ, type FAQItem } from "@/components/faq";

const architectureFaqs: FAQItem[] = [
  {
    question: "What does the package price include?",
    answer: "Our package includes architectural design, structural design, MEP (Mechanical, Electrical, Plumbing), civil construction, site inspections, and soil testing.",
  },
  {
    question: "Is the quoted construction cost final?",
    answer: "The cost is flexible and may vary depending on specific requirements, design preferences, and additional customizations.",
  },
  {
    question: "Does Towny Studio assign a site engineer?",
    answer: "Yes, a dedicated site engineer is appointed to oversee daily construction operations and ensure quality standards are maintained.",
  },
  {
    question: "Does Towny Studio assist with approvals and permits?",
    answer: "Yes, we assist with government liaison to secure plan sanctions and required approvals efficiently.",
  },
  {
    question: "What is a floor plan design?",
    answer: "A floor plan is a scaled diagram showing the layout of rooms and spaces. It provides a clear blueprint of the structure using 2D and 3D representations.",
  },
  {
    question: "Why is a well-designed house plan important?",
    answer: "It ensures optimal space utilization, better functionality, future flexibility, and enhanced aesthetics, contributing to a successful home construction project.",
  },
];

export default function ArchitecturePage() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <main className="min-h-screen bg-black text-white pt-16 lg:pt-20">
      <ArchitectureHero shouldReduceMotion={shouldReduceMotion} />
      <ExpertiseSection shouldReduceMotion={shouldReduceMotion} />
      <DesignPhilosophy shouldReduceMotion={shouldReduceMotion} />
      <ArchitectureProjects shouldReduceMotion={shouldReduceMotion} />
      {/* <ArchitecturePortfolio shouldReduceMotion={shouldReduceMotion} /> */}
      <Packages /> 
      <FAQ faqs={architectureFaqs} />

      <ArchitectureCta shouldReduceMotion={shouldReduceMotion} />
    </main>
  );
}