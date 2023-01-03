import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000,
    strictPort: true,
  },
};

export default config;
