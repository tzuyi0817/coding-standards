import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { dirname, resolve } from 'node:path';
import eslint from 'vite-plugin-eslint';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
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
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});
