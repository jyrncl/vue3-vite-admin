import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import defineOptions from "unplugin-vue-define-options/vite";
import * as path from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [vue(), defineOptions(), splitVendorChunkPlugin()],
    server: {
      port: 3756,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "/api")
        },
        "/jyrncl": {
          target: env.VITE_MOCK_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/jyrncl/, "/jyrncl")
        }
        // "/internal": {
        //   target: env.VITE_INTERNAL_BASE_URL,
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/internal/, "")
        // }
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
    },
    build: {
      chunkSizeWarningLimit: 2500,
      reportCompressedSize: true
    }
  });
};
