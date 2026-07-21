# web-ci

Create React App + GitHub Actions CI (npm)

## Scripts

```bash
npm start   # development server
npm test    # jest (watch mode)
npm run lint
npm run build
```

## CI

`.github/workflows/ci.yml` runs on push/PR to `main`/`master`:

1. `npm ci`
2. `npm run lint`
3. `npm test` (CI mode, no watch)
4. `npm run build`
