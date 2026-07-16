import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Compress with Brotli for max savings
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip', // Fallback to gzip
      ext: '.gz',
    })
  ],
  esbuild: {
    drop: ['debugger'],
    pure: ['console.log'], // Remove console.logs, but keep console.info for Easter Eggs
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'tsparticles': ['@tsparticles/engine', '@tsparticles/react', '@tsparticles/slim'],
          'lucide': ['lucide-react']
        },
      },
    },
  },
})
