# Shivam Dutt Sharma — Personal Portfolio

A minimalist one-page React/Vite portfolio. No backend, forms, cookies, analytics, or visitor data storage.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Deploy the `dist/` folder to Cloudflare Pages, Netlify or another static host. Cloudflare Pages build command: `npm run build`; output directory: `dist`.

## Update content

- Links and page content: `src/main.jsx`
- Typography, colors and layout: `src/styles.css`
- Search and social metadata: `index.html`

## Before launch

- Add individual published research links and Medium article links when available.
- Confirm personal domain availability, then configure DNS and canonical URL / sitemap as needed.
- Verify that all statements are still accurate before public launch.

The design takes inspiration from restrained editorial portfolio layouts, without copying any third-party code or assets.

## Upload to a new GitHub repository

Create an empty repository named `shivam-dutt-sharma-portfolio` on GitHub, then run from this folder:

```bash
git init
git add .
git commit -m "Initial personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shivam-dutt-sharma-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. For GitHub Pages project-site hosting, configure Vite's `base` to `/shivam-dutt-sharma-portfolio/` and deploy the build with GitHub Actions. For a custom domain hosted at the root, use `base: '/'`.
