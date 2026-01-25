import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Zet base op './' zodat assets relatief geladen worden (geschikt voor upload naar httpdocs of subfolders)
export default defineConfig({
  base: './',
  plugins: [react()],
})
