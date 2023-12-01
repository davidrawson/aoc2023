/// <reference types="vite/client" />
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    preserveSymlinks: false,
  },
});
