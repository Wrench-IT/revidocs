import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://wrench-it.github.io/revidocs/",
  plugins: [react()],
})
