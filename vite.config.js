import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // sourcemap: true, // Enable source maps
    outDir: "build", // Specify the output directory (relative to project root).
  },
});
