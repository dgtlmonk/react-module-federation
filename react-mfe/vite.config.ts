import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { exec } from "child_process";
// Custom plugin to generate types after build
const typeGenPlugin = (): Plugin => ({
  name: "type-gen",
  closeBundle: {
    sequential: true,
    async handler() {
      console.log("Generating types...");
      return new Promise((resolve, reject) => {
        exec("npm run build:types", (error, stdout) => {
          if (error) {
            console.error(`Type generation error: ${error}`);
            reject(error);
            return;
          }
          console.log(`Type generation output: ${stdout}`);
          resolve();
        });
      });
    },
  },
});
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "react-mfe",
      // manifest
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button.tsx",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
    typeGenPlugin(),
  ],
  build: {
    target: "esnext",
  },
});
