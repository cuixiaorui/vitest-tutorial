/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {vitestConfig} from './vitestConfig'

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    ...vitestConfig
  },
  plugins: [vue()]
})
