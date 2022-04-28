/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 11:52:00
 * @FilePath: \vue3-study\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.less';


const app = createApp(App);
app.use(router);
app.use(Antd).mount("#app")

