import type { APIRoute, GetStaticPaths } from 'astro';
import { sprite, spriteHash } from '../../lib/icons';

export const getStaticPaths: GetStaticPaths = () => [{ params: { hash: spriteHash } }];

export const GET: APIRoute = () =>
  new Response(sprite, { headers: { 'Content-Type': 'image/svg+xml' } });
