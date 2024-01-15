import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
  },
  plugins: [react()],
  build: {
    // sourcemap: true, // Enable source maps
    outDir: "build", // Specify the output directory (relative to project root).
  },
});
