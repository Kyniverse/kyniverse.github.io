import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: process.env.BASE_PATH,

  server: { port: 3000, },

  build: {
    target: 'esnext',
    cssMinify: true,
  },
});
