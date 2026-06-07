 import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
      entryRoot: "src"
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "UniversalPagination",
      fileName: "index"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});