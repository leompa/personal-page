import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-page/', // Cambia 'personal-page' por el nombre de tu repositorio en GitHub
})
