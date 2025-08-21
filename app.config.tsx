import { defineConfig } from "@solidjs/start/config";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  ssr: false,

  server: { 
    prerender: {
      crawlLinks: true
    }
  },

  vite: {
    resolve: {
      alias: [
        { find: '/@\/components\/((?!.*[.](ts|js|tsx|jsx|vue)$).*$)/', replacement: fileURLToPath(new URL("./src/components/$1/index.tsx", import.meta.url)) },

        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '@public', replacement: fileURLToPath(new URL('./public', import.meta.url)) },
        { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
        { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
        { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
        { find: '@templates', replacement: fileURLToPath(new URL('./src/templates', import.meta.url)) },
      ],
    }
  }
});