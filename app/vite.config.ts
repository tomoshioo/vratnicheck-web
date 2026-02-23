import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  publicDir: "public",
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [inspectAttr(), react()],
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    open: true,
  },
  preview: {
    host: true,
    port: 5175,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
