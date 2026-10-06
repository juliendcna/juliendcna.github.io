import { createHash } from 'node:crypto';

const sources = import.meta.glob<string>('../assets/logos/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const symbols = Object.entries(sources)
  .map(([path, svg]) => {
    const slug = path.split('/').pop()!.replace(/\.svg$/, '');
    const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? '0 0 24 24';
    const inner = svg
      .replace(/^[\s\S]*?<svg[^>]*>/, '')
      .replace(/<\/svg>\s*$/, '')
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .trim();
    return `<symbol id="${slug}" viewBox="${viewBox}">${inner}</symbol>`;
  })
  .join('');

/** Every logo as one cacheable sprite, referenced with <use> instead of inlined per use. */
export const sprite = `<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`;

export const spriteHash = createHash('sha1').update(sprite).digest('hex').slice(0, 10);

/** Content-hashed so it can be cached forever. */
export const spriteUrl = `/icons/${spriteHash}.svg`;
