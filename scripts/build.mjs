import { mkdir, rm, copyFile, cp } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/img', { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js', '.nojekyll', 'robots.txt', 'sitemap.xml']) await copyFile(file, `dist/${file}`);
await cp('assets', 'dist/assets', { recursive: true });
await copyFile('img/Sakila-Nasrin-Setu.pdf', 'dist/img/Sakila-Nasrin-Setu.pdf');
console.log('Static portfolio built in dist/');
