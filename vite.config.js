import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'

const spa404Plugin = () => ({
  name: 'spa-404',
  closeBundle() {
    const index = readFileSync(resolve('dist/index.html'), 'utf-8')
    writeFileSync(resolve('dist/404.html'), index)
  }
})

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), spa404Plugin()]
})
