import { gzipSync, constants } from 'node:zlib';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const TEXT = new Set(['.html', '.css', '.js', '.svg', '.xml', '.txt', '.json', '.webmanifest']);

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );

/**
 * OVH's shared hosting doesn't run mod_deflate or mod_expires, so .htaccess
 * can't compress or set Expires on the fly. Instead this writes a .gz copy of
 * every text file (served by the rewrite rules in .htaccess) and stamps a
 * one-year Expires date into .htaccess at build time.
 */
export default function precompress() {
  return {
    name: 'precompress',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        let count = 0;
        let saved = 0;
        for (const file of walk(out)) {
          if (!TEXT.has(extname(file))) continue;
          const raw = readFileSync(file);
          const gz = gzipSync(raw, { level: constants.Z_BEST_COMPRESSION });
          if (gz.length >= raw.length) continue;
          writeFileSync(`${file}.gz`, gz);
          count += 1;
          saved += raw.length - gz.length;
        }

        const htaccess = join(out, '.htaccess');
        try {
          statSync(htaccess);
          const expires = new Date(Date.now() + 365 * 864e5).toUTCString();
          writeFileSync(htaccess, readFileSync(htaccess, 'utf8').replaceAll('__EXPIRES_ONE_YEAR__', expires));
        } catch {
          /* no .htaccess in this build */
        }

        logger.info(`gzipped ${count} files, ${Math.round(saved / 1024)} KiB smaller`);
      },
    },
  };
}
