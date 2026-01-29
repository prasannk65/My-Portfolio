import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Important for GitHub Pages
    build: {
        outDir: 'dist',
        assetsInlineLimit: 0, // Don't inline assets
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    },
    publicDir: 'public' // We'll move images here
})
