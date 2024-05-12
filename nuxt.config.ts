import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineConfig, build } from "vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src",
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@vite-pwa/nuxt",
    (_options, nuxt) => {
      nuxt.hook("vite:extend", async ({ config }) => {
        // Add compilation of the service worker
        await build(
          defineConfig({
            root: "./src/worker", // Root directory for the worker script
            build: {
              outDir: "../public/", // Relative to the root
              emptyOutDir: false, // Avoid cleaning the public directory
              lib: {
                entry: "index.ts", // Entry file for your worker script
                name: "worker",
                formats: ["iife"], // Builds an immediately-invoked function expression
                fileName: () => "worker.js",
              },
              rollupOptions: {
                // Rollup options if needed
              },
            },
          })
        );
      });
    },
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    baseURL: "/KISS/",
    head: {
      // script: [{ src: "coi-serviceworker.min.js" }],
    },
  },
  pwa: {
    /* PWA options */
    mode: "development",
    injectRegister: "inline",
    strategies: "generateSW",
    devOptions: {
      enabled: true,
      type: "classic",
    },
    workbox: {
      importScripts: ["/KISS/worker.js", "/KISS/coi-serviceworker.min.js"],
    },
    manifest: {
      name: "KISS",
      short_name: "KISS",
      theme_color: "#7c063b",
      icons: [
        {
          src: "pwa-192x192.png", // <== don't add slash, for testing
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
  },
});
