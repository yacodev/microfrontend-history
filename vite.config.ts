import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

import dotenv from 'dotenv';

dotenv.config();

const HOST_URL =
  process.env.VITE_HOST_URL ?? 'https://challenge-apuesta-total.vercel.app';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'history',
      filename: 'remoteEntry.js',
      exposes: {
        './PokemonHistory': './src/pages/PokemonHistory.tsx',
        './HistoryCard': './src/components/HistoryCard/index.ts',
      },
      remotes: {
        host: `${HOST_URL}/assets/remoteEntry.js`,
      },
      shared: ['react', 'react-dom', 'zustand'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS'],
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
