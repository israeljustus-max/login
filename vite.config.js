import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  root: 'dev',
  base: './',
  plugins: [react()],
  resolve: { alias: { '/src': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { fs: { allow: ['..'] } },
  build: { outDir: '../dist', emptyOutDir: true, assetsInlineLimit: 100000 },
});
