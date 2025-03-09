import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {Button, NavBar} from 'vant'; // 引入一个 vant中的按钮组件
import 'vant/lib/index.css'; // 引入vant中的界面样式

// 创建一个APP 挂在上一个app组件
// #app组件是 id 选择器 选择的index.html中(墙)

const app = createApp(App); // 创建一个app对象
app.use(Button); //app对象使用引入的Button按钮
app.use(NavBar)
app.mount('#app') // 将app挂在到墙(#app)Id选择器上


