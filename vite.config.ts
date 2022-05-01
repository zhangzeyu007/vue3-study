/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 13:07:10
 * @FilePath: \vue3-study\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
const path = require('path')
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImportPlugin from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => ({
  // root: resolve(__dirname, 'src'),
  base: mode === 'production' ? '' : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
  },
  define: {
    isDev: JSON.stringify(mode !== 'production'),
  },
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment'
  // },
  server: {
    port: 8081,
    hmr: { overlay: false },
    // https: true,
    proxy: {

    },
  },
  build: {
    outDir: path.resolve(__dirname, './output'),
    manifest: true
  },
  plugins: [vue(), vueJsx(), AutoImportPlugin({
    imports: ['vue'],
    dts: 'src/types/auto-import.d.ts',
  }), legacy({ targets: ['defaults', 'not IE 11'] })],
}))
