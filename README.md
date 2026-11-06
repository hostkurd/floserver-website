# floserver.org

The website for [FloServer](https://floserver.org), by HostKurd: the home page,
download, privacy, licence and docs. A static site built with
[Astro](https://astro.build) and served by Cloudflare Pages.

## Work on it

Needs Node.js 22 (see `.node-version`).

```
npm install
npm run dev          # http://localhost:4321, reloads as you edit
npm run build        # the finished site, in dist/
npm run check-links  # after a build: every internal link and #anchor must exist
```

## Where things are

| Path | What it is |
| --- | --- |
| `src/pages/` | One file per page: `index.astro` (home), `download.astro`, `privacy.astro`, `licence.astro`, `404.astro` |
| `src/pages/docs/*.md` | The docs, in Markdown. `## Heading {#id}` gives a heading a fixed id |
| `src/data/site.js` | The current release (version, date, setup link, size), the company details and the docs menu |
| `src/data/eula.json` | The licence text, made from the installer's `License.rtf` (below) |
| `src/layouts/` | `Base.astro` (header and footer) and `Docs.astro` (docs menu and "On this page") |
| `src/styles/site.css` | All styles |
| `public/img/docs/` | Screenshots used in the docs |
| `public/_redirects`, `public/_headers` | Cloudflare Pages redirects and security headers |

## A new FloServer release

1. In `src/data/site.js`, change `release` (version, date, `setupUrl`, `setupFile`, size).
2. In `public/_redirects`, point `/download/latest` at the new setup.
3. If the licence changed, run the script below.

## The licence text

The Licence page shows the same text as the setup. When `installer/License.rtf`
changes in `hostkurd/floserver`, run:

```
node scripts/eula-from-rtf.mjs path/to/hostkurd/floserver/installer/License.rtf
```

and commit `src/data/eula.json`.

## Cloudflare Pages

Set up once in the Cloudflare dashboard: Workers & Pages → Create → Pages →
Connect to Git → `hostkurd/floserver-website`.

- Production branch: `main`
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

Then add the custom domain `floserver.org` (and `www.floserver.org`, redirected
to it) under the project's Custom domains. Each pull request gets its own preview
address.

GitHub Actions builds every pull request and checks its links (`.github/workflows/build.yml`).
