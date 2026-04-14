import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Explore our architectural design services, expertise, and conceptual processes built for enduring spaces.',
};

export default function ArchitectureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
