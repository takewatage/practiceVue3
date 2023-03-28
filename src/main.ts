import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'

import './scss/index.scss'
axios.defaults.baseURL = import.meta.env.VITE_APP_URL

const app = createApp(App)
app.use(router)
app.mount('#app')
