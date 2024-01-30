import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    "import.meta.env.VITE_URL": JSON.stringify(process.env.VITE_URL),
  }
})
