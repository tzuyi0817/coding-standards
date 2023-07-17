import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import eslint from 'vite-plugin-eslint';
import { version as pkgVersion } from './package.json';

process.env.VITE_APP_VERSION = pkgVersion;

if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    eslint(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});
