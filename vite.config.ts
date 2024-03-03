import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});


// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";
// import path from "path";

// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       ...visualizer({
//         open: true, // Open the visualization in the browser
//       }),
//     },
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   server: {
//     port: 5173, // Specify the desired port number
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         // Set Cache-Control headers for static assets
//         manualChunks: undefined,
//         assetFileNames: '[name].[hash][ext]',
//         chunkFileNames: '[name].[hash].js',
//         entryFileNames: '[name].[hash].js',
//       },
//     },
//     chunkSizeWarningLimit: 1000,
//   },
// });
