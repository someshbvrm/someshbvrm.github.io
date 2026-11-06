import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import seoPlugin from './seo-plugin.js';

// https://vite.dev/config/
// base is '/' because this is a GitHub user site (https://someshbvrm.github.io).
export default defineConfig({
  base: '/',
  plugins: [react(), seoPlugin()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
});
