import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Ensures relative paths for production
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Resolves `@` to `src`
    },
    extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"], // Resolves these extensions
  },
  define: {
    'process.env': {
      BACKEND_API_URL: JSON.stringify(process.env.BACKEND_API_URL),
    },
  },
  build: {
    outDir: "dist", // Use "dist" for output, compatible with Electron
    target: "esnext", // For modern JavaScript output
    modulePreload: { polyfill: false }, // Prevent unnecessary polyfills
    rollupOptions: {
      output: {
        format: "cjs", // Use CommonJS for compatibility with Electron
        entryFileNames: `[name].js`, // Use `.js` for CommonJS modules
      },
    },
  },
});