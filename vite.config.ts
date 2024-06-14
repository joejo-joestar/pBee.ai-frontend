import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@a", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@c", replacement: path.resolve(__dirname, "src/components") },
      { find: "@p", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@h", replacement: path.resolve(__dirname, "src/hooks") },

    ],
  },
});
