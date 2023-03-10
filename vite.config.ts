import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    plugins: [vue(), htmlPlugin(loadEnv(mode, "."))],
  }
})

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: "html-transform",
    transformIndexHtml: {
      enforce: "pre" as const,
      transform: (html: string): string =>
          html.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match),
    },
  }
}
