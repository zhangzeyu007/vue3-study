/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 17:21:23
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 17:43:53
 * @FilePath: \vue3-study\src\utils\hooks.ts
 */

import { onMounted } from 'vue'

type Options = {
	el: string
}


export default function (options: Options): Promise<{ baseUrl: string }> {
	return new Promise((resolve) => {
		onMounted(() => {
			let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
			console.log(img);
			img.onload = () => {
				resolve({ baseUrl: base64(img) })
			}

		})
		const base64 = (el: HTMLImageElement) => {
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d')
			canvas.width = el.width
			canvas.height = el.height
			ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
			return canvas.toDataURL('image/png')
		}
	})

}