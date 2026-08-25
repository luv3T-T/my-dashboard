import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-three": ["three"],
          "vendor-ogl": ["ogl"],
          "vendor-gsap": ["gsap"],
        },
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
