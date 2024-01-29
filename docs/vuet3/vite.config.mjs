// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

/**
 * new vue router...
 * https://github.com/posva/unplugin-vue-router
 */
import VueRouter from 'unplugin-vue-router/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// import.meta.env.BASE_URL = '/jsonl-to-yaml/'
// https://stackoverflow.com/questions/76115552/vue-3-vite-not-respecting-base-url-when-routing-route-refresh-produces-404
// process.env.BASE_URL = '/jsonl-to-yaml/' // also need cli...?
// only needed for the vite part?
export default defineConfig({
  // base: './',//baseURL or publicPath or assetsDir. ./ is relative to index.html
  /* https://vitejs.dev/guide/static-deploy.html */
  // should work.. but it aint because of vuetify?
  base: '/jsonl-to-yaml/',// Needed here and process.env.BASE_URL below with --base
  plugins: [
    //https://www.reddit.com/r/vuetifyjs/comments/10j41z6/vue3_vuetify_3_app_using_vite_deployment_to/
    VueRouter(),//  history: createWebHistory(import.meta.env.BASE_URL), # <= This lets vue-router know the right value at build-time
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  /* https://vitejs.dev/guide/env-and-mode */
  define: { 'process.env': {
    //needed thought it was ROUTER_BASE...
    BASE_URL:"/jsonl-to-yaml/"
    } },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '##': fileURLToPath(new URL('./../..', import.meta.url)),//project root
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
