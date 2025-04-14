import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: '/term-project-script-junkies/',
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  }
});
