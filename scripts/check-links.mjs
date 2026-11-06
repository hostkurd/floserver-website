// Checks every link inside the built site (dist/): each internal page must
// exist, and each #anchor must be an id on that page. Run after `npm run build`.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.html')) pages.push(p);
  }
};
walk(dist);

const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) {
    const html = readFileSync(file, 'utf8');
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(file);
};
const fileFor = (path) => {
  const clean = decodeURIComponent(path.split('?')[0]);
  const candidates = clean.endsWith('/') ? [join(dist, clean, 'index.html')] : [join(dist, clean), join(dist, clean, 'index.html')];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
};

const problems = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const from = '/' + relative(dist, page).replace(/index\.html$/, '');
  for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [path, hash] = url.split('#');
    const target = path === '' ? page : fileFor(path.startsWith('/') ? path : new URL(path, 'https://x' + from).pathname);
    if (!target) { problems.push(`${from}: ${attr} ${url} (no such file)`); continue; }
    if (hash && target.endsWith('.html') && !idsOf(target).has(hash)) problems.push(`${from}: ${url} (no #${hash} there)`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} broken link(s)`);
  process.exit(1);
}
console.log(`Checked ${pages.length} pages: all links work.`);
