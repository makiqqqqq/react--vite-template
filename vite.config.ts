import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      utils: '/src/utils',
      helpers: '/src/helpers',
      api: '/src/api',
      hooks: '/src/hooks',
      types: '/src/types',
      pages: '/src/pages',
    },
  },
})
