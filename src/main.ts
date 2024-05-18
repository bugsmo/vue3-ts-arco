import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vue-global-api'
import router from './router'

// 自定义指令
import pinia from '@/stores'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
