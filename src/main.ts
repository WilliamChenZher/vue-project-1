//整個專案的初始設定、不會將變數自動變成全域變數
import { createApp } from 'vue'
import { ref } from 'vue'
import App from './App.vue' //設定根元件
import router from './router' //設定路由器
const saved = localStorage.getItem("-a1阿djf^sh9_哲g~7&qu好55)11r帥t3@@4n)")

export const isLogin = ref(false)
export const StoreName = ref("載入中...")
export const BuyerName = ref("載入中...")
export const isOpenPrompt= ref(false)
export const promptcontent = ref("")

// Vue 初始化
const app = createApp(App)

app.use(router)

app.mount('#app')

if (saved) {
  isLogin.value = true
}
else{
  isLogin.value = false
}
