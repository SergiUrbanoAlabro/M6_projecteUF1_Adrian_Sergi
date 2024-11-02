import { defineConfig } from "vite";

export default defineConfig({
  root: "./", // Root directory for Vite
  base: "./", // Use relative paths for assets
  build: {
    outDir: "dist", // Output directory for the build
    rollupOptions: {
      input: "./index.html", // Entry point for the build
    },
  },
  server: {
    watch: {
      usePolling: true, // Ensures changes are detected in some environments
    },
  },
});
