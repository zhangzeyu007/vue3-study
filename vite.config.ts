/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-22 11:38:04
 * @FilePath: \unlimitedfe\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
const path = require('path')
import legacy from '@vitejs/plugin-legacy';

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
    hmr: { overlay: false },
    // https: true,
    proxy: {

    },
  },
  build: {
    outDir: path.resolve(__dirname, '../unlimitedServer/view/unlimitedfe/'),
    manifest: true
  },
  plugins: [vue(), legacy({ targets: ['defaults', 'not IE 11'] })],
}))
