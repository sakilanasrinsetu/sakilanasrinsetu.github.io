import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate element IDs');
for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  const url = match[1];
  if (url.startsWith('#')) assert(ids.includes(url.slice(1)), `Missing anchor ${url}`);
  else if (!/^(https?:|mailto:)/.test(url)) await access(url);
}
for (const section of ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']) assert(ids.includes(section));
assert.equal((html.match(/data-category=/g) || []).length, 4);
assert.equal((html.match(/class="job reveal"/g) || []).length, 5);
console.log('Local assets, anchors, sections, project count, and experience count verified.');
