import path from "path"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

/* host remotely  server: {
    host: true,
  },
*/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
