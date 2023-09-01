import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MinioES',
      fileName: 'minio-core',
    },
  },
  plugins: [nodePolyfills(), dts({
    include: 'src',
  })],
})
