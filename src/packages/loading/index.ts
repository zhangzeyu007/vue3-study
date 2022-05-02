/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-02 12:07:13
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-02 14:44:32
 * @FilePath: \vue3-study\src\packages\loading\index.ts
 */

import { App, createVNode, render, VNode } from 'vue'

import Loading from './index.vue'


export default {
	install(app: App) {
		const vnode: VNode = createVNode(Loading)
		render(vnode, document.body)
		app.config.globalProperties.$loading = {
			show: vnode.component?.exposed?.show,
			hide: vnode.component?.exposed?.hide,
		}
	}
}