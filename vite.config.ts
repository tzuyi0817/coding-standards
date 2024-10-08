import { fileURLToPath, URL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig, splitVendorChunkPlugin, type UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { visualizer } from 'rollup-plugin-visualizer';
import { version as pkgVersion } from './package.json';

process.env.VITE_APP_VERSION = pkgVersion;
process.env.NODE_ENV = process.env.MOCK ? 'mockServiceWorker' : process.env.NODE_ENV;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      dirs: ['src/components/common'],
      dts: 'src/components.d.ts',
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), 'src/locales/**'),
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/images/svgIcons')],
    }),
    visualizer({ gzipSize: true }),
    splitVendorChunkPlugin(),
  ],
  esbuild: {
    pure: ['console.log'],
    drop: ['debugger'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
  },
}) as UserConfig;
