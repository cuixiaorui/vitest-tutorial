/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    transformMode:{
      web:[/.tsx$/]
    }
  },
  plugins: [vueJsx(), vue()],
});



function getDeclareCode(origin, label) {
  const self = this

  const run = () => {

    ....你自己得逻辑
    把 this 改成 self 
    里面的调用修改成 run 
    
  }

  run()
}