/// <reference types="vite/client"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mdx-js/react"],
  },
  server: {
    fs: {
      allow: ["../"], // Permite acesso a arquivos acima do diretório atual
    },
  },
});

// https://vite.dev/config/
