/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-02 15:56:59
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-21 17:57:00
 * @FilePath: \vue3-study\src\store\index.ts
 */

import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
	name: string;
	age: number;
}


const Login = (): Promise<User> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: '飞机',
				age: 8
			})
		}, 2000)
	})
}


export const useTestSotre = defineStore(Names.TEST, {
	state: () => {
		return {
			current: 1,
			name: '杨洋',
			user: <User>{},
		}
	},
	// 计算属性
	getters: {
		newName(state): string {
			return `$----${state.name}---${this.getUserAge}`
		},
		getUserAge(): number {
			return this.user.age
		}
	},
	// methods 可以做同步 异步操作 提交state
	actions: {
		async setUser() {
			const result = await Login()
			this.user = result
			this.setName('飞机')
		},
		setName(name: string) {
			this.name = name
		}
	}
})