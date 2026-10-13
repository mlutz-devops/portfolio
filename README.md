# Portfolio

My personal portfolio site, built with Vite and Tailwind CSS.

## Run locally

With Node.js 22 installed:

```sh
npm ci
npm run dev
```

Open http://localhost:5173. To build and preview the production site:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. Build output is in `dist/`.

## Docker

```sh
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio
```

Open http://localhost:8080. The container serves the site with nginx; its configuration is in `nginx/default.conf`.

On each push, GitHub Actions uses a Docker-enabled self-hosted runner to publish AMD64 and ARM64 images to `ghcr.io/<owner>/<repo>` (lowercase), tagged `latest` and `sha-<commit>`.
