# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages with two sites:

- **Main site** (viridex.si) - Astro static site
- **Documentation** (viridex.si/learn) - Docusaurus documentation

## Deployment Setup

### Prerequisites

1. Push this repository to GitHub
2. Repository must be public (or you need GitHub Pages with private repos enabled)
3. Ensure your GitHub repository is named appropriately

### GitHub Pages Configuration

1. Go to your repository **Settings** → **Pages**
2. Under **Build and deployment**:
   - Select **Source**: GitHub Actions
   - This will use our automated workflow

### Automatic Deployment

The `.github/workflows/deploy.yml` workflow handles everything:

- Triggers on push to `main` branch
- Builds both Astro and Docusaurus sites
- Combines outputs (Docusaurus → `/learn` subdirectory)
- Deploys to GitHub Pages

### Local Development

#### Build everything locally

```bash
npm install          # Install root dependencies
npm run build        # Builds both sites and combines them
ls website/dist      # Main site output
ls website/dist/learn # Documentation output
```

#### Develop the main site

```bash
npm run dev          # Runs Astro dev server on http://localhost:3000
```

#### Develop documentation

```bash
npm run dev:books    # Runs Docusaurus dev server on http://localhost:3000
```

### Project Structure

```
viridex/
├── website/                 # Astro main site (viridex.si)
│   ├── src/
│   ├── public/
│   ├── astro.config.mjs
│   └── package.json
├── books/                   # Docusaurus docs (viridex.si/learn)
│   ├── prirocnik-racunalnistvo/
│   ├── docusaurus.config.ts
│   └── package.json
├── .github/workflows/
│   └── deploy.yml          # Automated deployment workflow
└── scripts/
    └── combine-builds.mjs  # Helper script to combine builds
```

### Build Output

- **Astro build**: `website/dist/` (main site pages)
- **Docusaurus build**: `website/dist/learn/` (documentation)
- **Final artifact**: `website/dist/` is deployed to GitHub Pages

### Domain Configuration

The sites are configured for `viridex.si`:

- **Astro** (`website/astro.config.mjs`): `site: 'https://viridex.si'`
- **Docusaurus** (`books/docusaurus.config.ts`): `url: 'https://viridex.si'`, `baseUrl: '/learn'`

To use a different domain:

1. Update both config files with your domain
2. Add a custom domain in GitHub Pages settings (Settings → Pages → Custom domain)
