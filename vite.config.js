import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SitemapPlugin from "vite-plugin-sitemap";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: "https://alshimaa.vercel.app/",
      dynamicRoutes: [
        "/",
        "/about",
        "/services",
        "/contact-us",
        "/vegetables",
        "/fruits",
        "/products",
      ],
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
});
