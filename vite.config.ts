import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import defineOptions from "unplugin-vue-define-options/vite";
import * as path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [vue({ reactivityTransform: true }), defineOptions()],
    server: {
      port: 3756,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        },
        "/jyrncl": {
          target: env.VITE_MOCK_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/jyrncl/, "/jyrncl")
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: "@import '@/style/variable.scss';@import '@/style/mixin.scss';"
        }
      }
    },
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src")
      }
    }
  });
};
