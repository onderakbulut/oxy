import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import url from 'url'
import svgr from 'vite-plugin-svgr'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  server: {
    historyApiFallback: true,
  },
})