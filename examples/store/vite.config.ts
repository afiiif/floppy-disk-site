import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: "0.0.0.0", // Required for CodeSandbox to route traffic
    hmr: {
      clientPort: 443, // Forces HMR to use the secure proxy port
    },
    allowedHosts: true, // Or specify your codesandbox.io domain
  },
});
