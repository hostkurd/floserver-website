// Turns the installer's licence (installer/License.rtf in hostkurd/floserver)
// into src/data/eula.json, so the Licence page shows exactly the same text.
//
//   node scripts/eula-from-rtf.mjs path/to/License.rtf
//
// The RTF is simple and line based: one \pard ... \par per paragraph,
// headings in \b ... \b0, list items starting with \bullet.
import { readFileSync, writeFileSync } from 'node:fs';

const src = process.argv[2];
if (!src) {
  console.error('Usage: node scripts/eula-from-rtf.mjs path/to/License.rtf');
  process.exit(1);
}

const rtf = readFileSync(src, 'latin1');

function text(raw) {
  return raw
    .replace(/\\'([0-9a-f]{2})/gi, (_, h) => Buffer.from([parseInt(h, 16)]).toString('latin1'))
    .replace(/\\u(-?\d+)\??/g, (_, n) => String.fromCharCode((Number(n) + 65536) % 65536))
    .replace(/\\([\\{}])/g, (_, c) => `\u0000${c.charCodeAt(0)}\u0000`)
    .replace(/\\[a-z]+-?\d* ?/gi, '')
    .replace(/[{}]/g, '')
    .replace(/\u0000(\d+)\u0000/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();
}

const blocks = [];
for (const line of rtf.split(/\r?\n/)) {
  if (!line.startsWith('\\pard')) continue;
  const body = line.replace(/\\par\s*$/, '');
  const bold = /\\b(?![a-z0-9])/.test(body) && /\\b0/.test(body);
  const bullet = /\\bullet/.test(body);
  const t = text(body.replace(/\\bullet\s*/, ''));
  if (!t) continue;
  if (bullet) {
    const last = blocks.at(-1);
    if (last && last.type === 'list') last.items.push(t);
    else blocks.push({ type: 'list', items: [t] });
  } else if (bold) {
    blocks.push({ type: blocks.length === 0 ? 'title' : 'heading', text: t });
  } else {
    blocks.push({ type: 'p', text: t });
  }
}

writeFileSync(new URL('../src/data/eula.json', import.meta.url), JSON.stringify(blocks, null, 2) + '\n');
console.log(`Wrote ${blocks.length} blocks`);
