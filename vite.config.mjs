import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  plugins: [react()],
  // Create React App's prefix for paths into public/, kept by three components. It is empty
  // because the site lives at the root.
  define: { 'process.env.PUBLIC_URL': JSON.stringify('') },
  // The PostCSS steps Create React App ran, so the CSS keeps its prefixes and fixes.
  css: {
    postcss: {
      plugins: [
        postcssFlexbugsFixes,
        postcssPresetEnv({ autoprefixer: { flexbox: 'no-2009' }, stage: 3 }),
      ],
    },
  },
  server: { port: 3000 },
  build: {
    outDir: 'build',
    // Every browser with ES modules (Vite's earlier default). Vite 8's own default starts at Safari
    // 16.4, and minifying for it rewrites media queries into a syntax older iPhones ignore.
    target: ['chrome87', 'edge88', 'firefox78', 'safari14', 'ios14'],
    // Ship the CSS as PostCSS leaves it, the same as in development. Vite's minifier (Lightning
    // CSS) drops an unprefixed property declared before its -webkit- twin, which is how the
    // stylesheets write backdrop-filter.
    cssMinify: false,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
