/// <reference types="vitest/config" />
import path from "node:path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: { index: path.resolve(__dirname, "index.html"), content: path.resolve(__dirname, "src/content-client.ts") },
      output: {
        manualChunks(id) {
          // Tiny styling helpers shared by the app shell AND recharts. They must
          // get their own chunk: left to Rollup they land inside "charts", which
          // makes the ENTRY statically import the charts chunk — that
          // modulepreloaded all ~357KB of recharts on every cold visit and
          // silently defeated the lazy ProgressScreen boundary below.
          if (/node_modules[\\/](clsx|tailwind-merge|class-variance-authority)[\\/]/.test(id)) return "ui-utils"
          if (/node_modules[\\/](recharts|d3-[^\\/]+|victory-vendor|internmap)[\\/]/.test(id)) return "charts"
          if (/node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return "react"
          // One chunk per exam bank so picking an exam fetches only that bank.
          const bank = /src[\\/]data[\\/](220-1201|220-1202|n10-009|sy0-701|aif-c01|clf-c02|az-900)\.ts$/.exec(id)
          if (bank) return `bank-${bank[1]}`
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8787",
    },
  },
  test: {
    environment: "node",
    // .tsx tests render hook-free components with renderToStaticMarkup, which
    // needs no DOM -- the same way tools/prerender.tsx runs them.
    include: ["src/**/*.test.{ts,tsx}", "worker/**/*.test.ts"],
  },
})
