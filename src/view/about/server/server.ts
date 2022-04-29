/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 21:17:29
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 22:29:23
 * @FilePath: \vue3-study\src\view\about\server\server.ts
 */

type NameList = {}


export const axios = (url: string): Promise<NameList> => {
	return new Promise((resolve, reject) => { 

		let xhr: XMLHttpRequest = new XMLHttpRequest() 
		
		xhr.open('GET', url)

		xhr.onreadystatechange = () => { 
			if (xhr.readyState === 4 && xhr.status === 200) {
				setTimeout(() => {
					resolve(JSON.parse(xhr.responseText))
				},5000)
			}
		}
		xhr.send(null)
	})
}