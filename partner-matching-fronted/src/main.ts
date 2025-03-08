import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 创建一个APP 挂在上一个app组件
// #app组件是 id 选择器 选择的index.html中(墙)
createApp(App).mount('#app')
