# Sakila Nasrin Setu — Portfolio

A responsive, static personal portfolio for https://sakilanasrinsetu.github.io/.
Built with semantic HTML, CSS, and vanilla JavaScript. No npm dependencies or frontend framework are required. Google Fonts is optional; system fonts provide a fallback.

## Local development

Requires Node.js 22+ and Python 3 for the preview command.

```sh
npm run check
npm run build
npm run preview
```

Open http://localhost:4173. Rebuild after editing source files. You can also serve the repository directly with `python3 -m http.server 4173`.

## GitHub Pages deployment

1. Commit and push the finished changes to the `main` or `master` branch of `sakilanasrinsetu/sakilanasrinsetu.github.io`.
2. In the GitHub repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages**. The workflow runs automatically on a push to `main` or `master`; it can also be started manually.
4. Wait for both build and deployment jobs to succeed, then visit https://sakilanasrinsetu.github.io/.

The workflow checks the source, builds `dist/`, and uploads only the active portfolio and its assets. Archived `Previous/` sites and unrelated files are excluded. If the default branch has a different name, update the workflow's branch filter. This work prepares deployment; it does not itself push changes or verify a live deployment.

## Content and assets

- `index.html`: professional copy, timeline, skills, projects, education, contact links, and SEO metadata.
- `style.css`: cream, lavender, peach, and soft teal design; responsive layouts; glass effects; reduced-motion styles.
- `script.js`: mobile menu, active section tracking, project filtering, section reveals, animated role text, and copyright year.
- `assets/sakila.webp`: optimized derivative of the supplied `img/Sakila-Nasrin-Setu.png`. Replace it to update the portrait, or use a same-size placeholder.
- `img/Sakila-Nasrin-Setu.pdf`: existing downloadable CV. **This is an older CV**, not an updated PDF matching every detail in the brief. Replace it with the current approved CV before sharing the site for applications. Its existing content includes personal information; this implementation does not reproduce those personal details in page copy.

The user-provided brief supplies updated employment dates, education, skills, and project results. Existing CV responsibilities support the G-Projukti, Limerick, Techsist, and Rapples summaries. Auspicious has only its supplied role and dates because no responsibilities were available. The existing restaurant repository link is preserved. Three other project cards explicitly state that repository links were not provided; add confirmed URLs rather than guessing. Existing `myshop` was not assumed to be CommerceCore v2.0.

Contact uses working `mailto:` links because no submission service is configured. There is no simulated form submission. Lightweight CSS/SVG animation replaces heavier GIF/Lottie downloads. Navigation, content, and contact links remain available without JavaScript.

## Verification

`npm run check` validates JavaScript syntax, local asset paths, internal anchors, duplicate IDs, required sections, and project/experience counts. `npm run build` generates the deployment artifact.

A real browser was unavailable in the implementation environment. Before publishing, visually check at 375px, 768px, and 1440px widths: open and close the mobile menu (including Escape), keyboard-focus all controls, filter each project category, test email and CV links, scroll through active navigation, and enable reduced motion in your OS/browser. External social/repository destinations have been preserved from the existing site, but were not independently checked for availability.

Existing user changes to source images were preserved. No deployment has been performed or verified.
