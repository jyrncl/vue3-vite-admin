import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3756,
    host: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: "@import '@/style/variable.scss';"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src")
    }
  }
});
