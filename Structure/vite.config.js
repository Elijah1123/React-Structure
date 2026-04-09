import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Polling is essential on many Linux setups to detect file changes
    watch: {
      usePolling: true,
    },
    // This ensures the server explicitly handles the port 
    host: true,
    port: 5173,
  },
  resolve: {
    // This helps Vite resolve the .jsx extensions we are using in the features folder
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})