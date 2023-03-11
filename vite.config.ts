import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {

  let config = {}

  const commonConfig = {
    plugins: [vue(), htmlPlugin(loadEnv(mode, "."))],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  }

  if (command === 'serve') {
    config = {}
  } else {
    config = {
      css: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
    }
  }

  config = {...commonConfig, ...config}
  return config
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
