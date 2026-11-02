# Abdullah Khan — Developer Portfolio

A responsive React portfolio for full-stack development, AI applications, and real-time systems. The design uses warm paper tones, forest green, lime accents, and an editorial type system.

## Local development

```sh
npm ci
npm start
```

On Windows PowerShell with script execution disabled, use `npm.cmd`.

## Editing the portfolio

- `src/portfolio/data.js`: project descriptions, experience, skills, social links, and the learning archive.
- `src/portfolio/Portfolio.js`: active pages, navigation, project filtering, expandable contributions, and workflow illustrations.
- `src/portfolio/portfolio.css`: design tokens, styles, animations, and responsive layouts.
- `src/App.js`: routes. Existing `/project`, `/about`, `/learning`, and `/resume` URLs are preserved.
- `src/Assets/Muhammad_Abdullah_khan.pdf`: current downloadable résumé.

Main projects intentionally use text without screenshots. Early learning projects retain their images. Client projects use generic titles and omit identifying links. The attached résumé is the original supplied PDF, so review its contents separately before sharing.

The earlier components under `src/components/` and their styles remain available as reference; the new application uses `src/portfolio/`.

## Validation

```sh
npm test -- --watchAll=false
npm run build
```

`scripts/portfolio-qa.cjs` runs browser checks with Playwright against a running server. Install Playwright separately, make it available with `NODE_PATH`, and set `CHROME_PATH` if Chrome is installed somewhere other than the default Windows path. Set `PORTFOLIO_URL` to use another server URL. Screenshots are saved in the operating system’s temporary `portfolio-qa` directory.

Checks cover all five pages at 320, 390, 768, 1024, and 1440px; horizontal overflow; mobile navigation; project filters and details; workflow keyboard controls; the experience selector; clipboard behavior; résumé download; and reduced-motion preferences.
