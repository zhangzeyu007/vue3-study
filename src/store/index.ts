/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-02 15:56:59
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-02 16:10:38
 * @FilePath: \vue3-study\src\store\index.ts
 */

import { defineStore } from 'pinia'
import { Names } from './store-name'


export const useTestSotre = defineStore(Names.TEST, {
	state: () => {
		return {
			current: 1,
			name: '张泽雨'
		}
	},
	// 计算属性
	getters: {

	},
	// methods 可以做同步 异步操作 提交state
	actions: {

	}
})