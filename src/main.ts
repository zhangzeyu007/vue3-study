/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 15:23:51
 * @FilePath: \vue3-study\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.less';
import Card from "@/components/card/index.vue";


const app = createApp(App);
app.use(router);
app.use(Antd).component('Card', Card).mount("#app")

