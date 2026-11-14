#!/usr/bin/env node
// Docs checks: internal links, English/Vietnamese twins, likely secrets. No dependencies.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).split('\n').filter(Boolean);
const md = files.filter((f) => f.endsWith('.md'));
const errors = [];

// 1. Twins: every X.md has X.vi.md and vice versa.
const set = new Set(md);
for (const f of md) {
  if (f.startsWith('.github/')) continue; // GitHub templates are single-language by design
  const twin = f.endsWith('.vi.md') ? f.replace(/\.vi\.md$/, '.md') : f.replace(/\.md$/, '.vi.md');
  if (!set.has(twin)) errors.push(`twin: ${f} has no ${twin}`);
}

// 2. Internal links resolve (http(s), mailto and pure anchors are skipped).
for (const f of md) {
  const text = readFileSync(f, 'utf8');
  for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
    if (!existsSync(resolve(dirname(f), target))) errors.push(`link: ${f} -> ${m[1]}`);
  }
}

// 3. Likely secrets in any tracked text file.
const patterns = [
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{20,}/],
  ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/],
  ['JWT', /\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{10,}/],
  ['Bearer token', /Bearer\s+[A-Za-z0-9._-]{24,}/],
  ['API key (inet_sk_)', /\binet_sk_[A-Za-z0-9]{10,}/],
  ['Private key', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ['Credential assignment', /\b(password|passwd|secret|token|api[_-]?key)\b\s*[:=]\s*['"]?[A-Za-z0-9/+_-]{12,}/i],
];
for (const f of files) {
  if (f === 'scripts/check-docs.mjs') continue;
  let text;
  try { text = readFileSync(f, 'utf8'); } catch { continue; }
  text.split('\n').forEach((line, i) => {
    for (const [name, re] of patterns) if (re.test(line)) errors.push(`secret: ${f}:${i + 1} looks like ${name}`);
  });
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log(`OK: ${md.length} Markdown files, twins and links fine, no secrets found.`);
