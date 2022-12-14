import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-transform-typescript-metadata",
          ["@babel/plugin-proposal-decorators", { version: "legacy" }],
          "@babel/plugin-proposal-class-properties",
        ],
      },
    }),
  ],
});
