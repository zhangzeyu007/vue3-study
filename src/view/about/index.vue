<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-26 19:26:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-26 22:41:24
 * @FilePath: \vue3-study\src\view\about\index.vue
-->
//**
 * vue3 常用基础语法学习
 */
<template>
<div>{{message}}</div>
<div @click="changMeg" v-bind:style="style">点击</div>
<div>{{shallow.greet}}</div>
<div>{{my}}</div>
</template>


<script setup lang="ts">
import {ref ,Ref , isRef , shallowRef , triggerRef ,customRef } from 'vue'

let  message:Ref<string> = ref('年后')
let  not:string  = '年后'
const shallow = shallowRef({
  greet: 'Hello, world'
})

function  myRef<T> (value:T) {
	return customRef((track, trigger) => {
	  return {
		  get() {
			  track()
			  return value
		  },
		  set(newValue:T) {
			  console.log('set'+newValue);
			  value = newValue
			  trigger()
		  }
	  }
	})
} 

let my = myRef<string>('woo')
type Style = {
	color:string
	height:string
	fontSize:string
}

const style:Style = {
	color:'red',
	height:'100px',
	fontSize:'30px'
}

const changMeg = () =>{
	// message.value= '我的'
	// shallow.value = {
	// 	greet: '小王'
	// }
	shallow.value.greet = '小梦'
	triggerRef(shallow)
	// console.log(isRef(message));
	console.log(isRef(not));
	my.value = 'WPO'

}
</script>