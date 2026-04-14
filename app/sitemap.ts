import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable for domain, or fallback to a production domain placeholder
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://townystudio.com';

  const routes = ['', '/about', '/architecture', '/interior', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
