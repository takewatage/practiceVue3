import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  if (command === 'serve') {
    return {
      plugins: [vue(), htmlPlugin(loadEnv(mode, "."))],
    }
  } else {
    return {
      plugins: [vue(), htmlPlugin(loadEnv(mode, "."))],
      css: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
    }
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
