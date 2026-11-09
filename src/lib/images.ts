import type { ImageMetadata } from 'astro';

// Tutte le immagini dei progetti, risolte da Astro (astro:assets) per dimensioni e ottimizzazione.
const glob = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/formica/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

export function projectImages(slug: string): ImageMetadata[] {
  return Object.entries(glob)
    .filter(([p]) => p.includes(`/formica/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);
}

export function projectCover(slug: string): ImageMetadata | undefined {
  return projectImages(slug)[0];
}
