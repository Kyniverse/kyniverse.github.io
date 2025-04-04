import solidPlugin from 'vite-plugin-solid';
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [solidPlugin()],

  server: {
    port: 3000,
  },

  build: {
    target: 'esnext',
  },

  resolve: {
    alias: [
      { find: '/@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/', replacement: fileURLToPath(new URL("./src/components/$1/index.tsx", import.meta.url)) },
      
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages]', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
    ],
  }
});
