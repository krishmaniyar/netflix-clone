import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/netflix-clone/",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
