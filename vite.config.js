import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // ✅ VERY IMPORTANT
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'], // ✅ FIXES HOOK ERROR
  },
})