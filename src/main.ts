/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 12:10:11
 * @FilePath: \vue3-study\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/styles/reset.less';
import Card from "@/components/card/index.vue";
import mitt from 'mitt';

const Mit = new mitt();

const app = createApp(App);

declare module 'vue' {
	export interface ComponentCustomProperties {
		$Bus: typeof Mit
	}
}

app.config.globalProperties.$Bus = Mit;

app.use(router);
app.use(Antd).component('Card', Card).mount("#app")

