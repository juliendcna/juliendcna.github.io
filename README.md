# dacunha.ovh — Personal portfolio

[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v1/monitor/bs5y.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

Personal portfolio of Julien Da Cunha — Cloud & DevOps Engineer, Geneva.

Built with [Astro](https://astro.build). Fully static, multilingual (EN `/`, FR `/fr/`, ES `/es/`).

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/i18n/` — typed translation dictionaries (en, fr, es)
- `src/components/` — page sections (Hero, About, Timeline, …)
- `src/pages/` — one page per locale, all rendering `Portfolio.astro`
- `public/` — favicon, robots.txt, .htaccess, static images

## Deployment

Pushes to `main` trigger the GitHub Actions workflow, which builds the site
and uploads `dist/` to OVHcloud over SFTP.
