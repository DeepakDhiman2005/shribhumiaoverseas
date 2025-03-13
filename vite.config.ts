import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '0.0.0.0', // Allows access from any network
  //   port: 5173, // Change if needed
  //   strictPort: true, // Ensures the exact port is used
  //   open: true, // Opens browser automatically
  // }
})
