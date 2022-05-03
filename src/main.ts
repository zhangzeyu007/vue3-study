/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-13 16:23:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-03 12:48:07
 * @FilePath: \vue3-study\src\main.ts
 */

import { createApp, toRaw } from 'vue'
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
import { createPinia, PiniaPluginContext } from 'pinia'

type Options = {
	key?: string;
}

const store = createPinia()
const Mit = new mitt();


const setStorage = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const __pinakey__: string = 'zzy'

const piniaPlugin = (options: Options) => {
	console.log(options,'options------');
	return (context: PiniaPluginContext) => {
		console.log(context, 'context');
		const { store } = context
		console.log(store, 'store');
		const data = getStorage(`${options.key ? options.key : __pinakey__}-${store.$id}`)
		console.log(data);
		store.$subscribe(() => {
			console.log('subscribe----持久化');
			setStorage(`${options.key ? options.key : __pinakey__}-${store.$id}`, toRaw(store.$state))
		})
		return {
			...data
		};
	}
}


const app = createApp(App);

declare module 'vue' {
	export interface ComponentCustomProperties {
		$Bus: typeof Mit,

	}
}
type Filter = {
	formate: <T>(str: T) => string
}
declare module "@vue/runtime-core" {
	export interface ComponentCustomProperties {
		$Bus: typeof Mit
		$loading: {
			show: () => void
			hide: () => void
		}
		$filters: Filter
		$env: string

	}
}

app.config.globalProperties.$Bus = Mit;

app.config.globalProperties.$filters = {
	formate<T>(str: T): string {
		return `真>>>${str}`
	}
}

app.config.globalProperties.$env = 'dev'

store.use(piniaPlugin({
	key: 'pinia'
}))
app.use(Loading)
app.use(router);
app.use(ElementPlus)
app.use(store)
app.use(Antd).component('Card', Card).mount("#app")

