# KeySoundboard website

The React product website for [KeySoundboard for Mac](https://keysoundboard.com). Includes features, audio setup, and searchable help.

## Local development

```sh
npm ci
npm start
```

The development site runs at `http://localhost:3000`.

```sh
npm run build
CI=true npm test -- --watchAll=false --runInBand
```

The build is written to `build/`. The existing `npm run deploy` command builds and publishes that directory to the repository’s GitHub Pages branch. It is a publishing action; use it only when ready to release.

## Site structure

- `src/index.css` contains the design tokens and shared styles.
- `src/data/faqs.js` supplies the homepage questions and searchable FAQ page.
- `src/config.js` centralizes the App Store, support, and legacy cleanup destinations.
- `src/soundboard/pages/SoundboardDriverPage.js` documents the built-in driver. The legacy uninstaller remains available only for older installations; there is no separate current-driver download.
- Support lives off this site. Every contact link points at `https://henhen1227.com/support`, and the retired `/contact` route redirects there for saved links.

## Hosting and metadata

The site is configured for the root of `keysoundboard.com`. `public/404.html` restores direct links on GitHub Pages through the root document; hosts with native SPA rewrites can send routes directly to `index.html`. Legacy `/home` and `/soundboard` routes redirect to the homepage, and `/contact` redirects to the support site. The older driver `#install` link leads to the setup steps, and `#uninstall` leads to legacy cleanup.

Page titles, descriptions, canonical links, a sitemap, and the web manifest are included. Google Fonts use system-font fallbacks. Analytics run only in production on the public site hostname, not in local previews or tests.

## Verification

Regression tests cover FAQ filtering, navigation, legacy routes, mobile menu behavior, and support-link destinations. Layout and interactions were also checked in the browser at phone, tablet, and desktop widths. Reduced-motion preferences and visible keyboard focus are supported.
