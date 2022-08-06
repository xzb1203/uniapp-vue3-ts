import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
    },
  },
});
