import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import preload from "vite-plugin-preload"
import { VitePWA } from "vite-plugin-pwa"
import { imagetools } from "vite-imagetools"

export default defineConfig({
  plugins: [
    react(),
    imagetools({ namedExports: false }),
    preload(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg","favicon.ico","robots.txt","apple-touch-icon.png"],
      manifest: {
        id: "/",
        name: "SkySeeVideo",
        short_name: "SkySeeVideo",
        description: "Make an Impact",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: { cacheName: "images", expiration: { maxEntries: 200 } }
          }
        ]
      }
    })
  ]
})
