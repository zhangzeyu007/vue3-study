/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-02 15:56:12
 * @FilePath: \vue3-study\src\main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/reset.less';
import Card from "@/components/card/index.vue";
import mitt from 'mitt';
import Loading from './packages/loading/index';
import { createPinia } from 'pinia'


const store = createPinia()
const Mit = new mitt();

const app = createApp(App);

declare module 'vue' {
	export interface ComponentCustomProperties {
		$Bus: typeof Mit
	}
}
type Filter = {
	formate: <T>(str: T) => string
}
declare module "@vue/runtime-core" {
	export interface ComponentCustomProperties {
		$Bus: typeof Mit
		$filters: Filter
		$env: string
		$loading: {
			show: () => void
			hide: () => void
		}
	}
}

app.config.globalProperties.$Bus = Mit;

app.config.globalProperties.$filters = {
	formate<T>(str: T): string {
		return `真>>>${str}`
	}
}

app.config.globalProperties.$env = 'dev'

app.use(Loading)
app.use(router);
app.use(ElementPlus)
app.use(store)
app.use(Antd).component('Card', Card).mount("#app")

