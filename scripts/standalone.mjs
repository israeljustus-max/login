import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Exporta a aplicação compilada em um único HTML, sem precisar de servidor.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
let html = await readFile(resolve(output, 'index.html'), 'utf8');
const scriptTag = /<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g;
const styleTag = /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/g;
for (const match of [...html.matchAll(scriptTag)]) {
  const source = await readFile(resolve(output, match[1]), 'utf8');
  html = html.replace(match[0], () => `<script type="module">${source.replace(/<\/script/gi, '<\\/script')}</script>`);
}
for (const match of [...html.matchAll(styleTag)]) {
  const source = await readFile(resolve(output, match[1]), 'utf8');
  html = html.replace(match[0], () => `<style>${source.replace(/<\/style/gi, '<\\/style')}</style>`);
}
if (/\bsrc="[^" ]+\.jsx"/.test(html) || /<script[^>]+src=/.test(html)) {
  throw new Error('O HTML ainda depende de scripts externos.');
}
await writeFile(resolve(root, 'index.html'), html);
await writeFile(resolve(output, 'index.html'), html);
console.log('index.html autônomo gerado na raiz e em dist/.');
