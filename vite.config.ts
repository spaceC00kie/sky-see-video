import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
import { imagetools } from "vite-imagetools"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    // ViteImageOptimizer({
    //   jpeg: { quality: 82 },
    //   png: { quality: 80 },
    //   webp: { quality: 82 },
    //   avif: { quality: 50 },
    //   svg: { multipass: true },
    // }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        id: "/",
        name: "SkySeeVideo",
        short_name: "SkySeeVideo",
        description: "Business Videos That Connect to Your Audience",
        theme_color: "#ffffff",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    }),
  ],
})
