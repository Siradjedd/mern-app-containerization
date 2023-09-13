import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      // Exclude the 'node_modules' directory from file watching
      exclude: ['node_modules/**'],
    },
    // Optionally, you can specify a custom port
    // port: 5173, When not running with docker compose, this is the port which will be used in docker
  },
})
