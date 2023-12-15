import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "api",
      "db",
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache"
    ],
    coverage: {
      exclude: ["**/app/**", "**/http/**", "**/shared/**"],
      provider: "v8",
      reporter: ["text", "json", "html"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@connect": path.resolve(__dirname, "./src/connect"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@setup": path.resolve(__dirname, "./src/setup")
    }
  }
});
