import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build output goes to dist/. Cloudflare Pages should use:
//   build command: npm run build
//   output directory: dist
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
