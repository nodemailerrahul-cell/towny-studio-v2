import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design',
  description: 'Discover our interior design excellence. Elegant minimalism, functional layouts, and bespoke material language.',
};

export default function InteriorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
