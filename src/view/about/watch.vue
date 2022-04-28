<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-27 16:16:16
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-27 17:12:06
 * @FilePath: \vue3-study\src\view\about\watch.vue
-->


<template>
<input type="text" v-model="message">
<input type="text" v-model="message2">
<input type="text" v-model="message3.nav.bar.open">
<input type="text" v-model="message4.name2">
<input type="text" v-model="message4.name">
<input id="ipt" type="text" v-model="message5">
<button @click="stoWatch">停止监听</button>
</template>


<script setup lang="ts">
import { ref , watch ,reactive , watchEffect} from 'vue'

let message = ref<string> ('')
let message2 = ref<string> ('')
let message3 = ref ({
	name:'张泽雨',
	nav: {
		bar:{
			open:"小明"
		}
	}
})

// 创建响应数据对象
const message4 = reactive({
	name:'张泽雨',
	name2:'我的名字'
})
let message5 = ref<string> ('飞机')

// watch 监听器 监听多个响应数据
watch([message,message2],(newVal,oldVal) => {
 console.log(newVal);
 console.log(oldVal);
})

// watch 监听深层次的对象
watch(message3,(newVal, oldVal)=>{
console.log('新数据',newVal);
console.log('老数据',oldVal);
},{
	deep:true,
	immediate:true
})

// watch 监听响应式对象,某个指定的属性
watch(()=>message4.name2,(newVal, oldVal)=>{
	console.log(newVal);
	console.log(oldVal);
})


// watchEffect 副作用监听器
const stop = watchEffect((oninvalidate)=>{
	let ipt:HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
	console.log('watchEffect', message5.value)
	console.log(ipt , 'inputIpt')
	oninvalidate(()=>{
		console.log('watchEffect invalidate');
	})
}, {
	flush: 'post',
	onTrigger(e) {	
     debugger
	}
})

const stoWatch = ()=>{
	stop()
}

</script>