import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

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
        host: 'http://localhost:3000/assets/remoteEntry.js',
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
});
