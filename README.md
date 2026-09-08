# Koupoli website

This repository contains the code-first rebuild of the Koupoli SEO and organic-growth portfolio. The public site is deployed from the `main` branch using GitHub Pages.

## Updating the site through Manus

Send a change request in this Manus project—such as “add a project,” “rewrite the SEO service section,” or “create a new blog post.” Each approved change is implemented in this codebase, tested, committed, and pushed to `main`. GitHub Actions then builds and publishes the updated site automatically.

## Local development

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm check
pnpm build
```

## Deployment

Pushing to `main` deploys the website to GitHub Pages. The first GitHub Pages activation is completed through the repository’s **Settings → Pages** once, with the source set to **GitHub Actions**. After that, deployment is automatic on every push.

The GitHub Pages URL is expected to be:

`https://ridolijus.github.io/koupoli-site/`

The `robots.txt` and `sitemap.xml` files contain this GitHub Pages URL. When a custom domain is connected, replace it in both files and add a `CNAME` file under `client/public/`.
