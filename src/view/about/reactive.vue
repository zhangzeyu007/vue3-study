<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-26 19:26:50
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-27 15:04:08
 * @FilePath: \vue3-study\src\view\about\reactive.vue
-->
/**
 * vue3 数据响应式学习
 */
<template>
<div>{{message}}</div>
<div @click="changMeg" v-bind:style="style">点击</div>
<div>{{shallow.greet}}</div>
<div>{{my}}</div>
<div>{{obj}}</div>
<button @click="change1">1</button>
<button @click="change2">2</button>
<h1>{{myObj}}</h1>
</template>


<script setup lang="ts">
// vue3 数据响应式
import {ref ,Ref , isRef , shallowRef , triggerRef ,customRef , reactive ,readonly , shallowReactive} from 'vue'
// 声明泛型
type O = {
	name:string
	age:number	
	list:number[]
}
// 创建响应式对象
const obj = reactive<O>({
	name:'张泽雨',
	age:18,
	list:[]
})


let  message:Ref<string> = ref('年后')
let  not:string  = '年后'


// shallow 改变 ref 的值是响应式的 
/* isReactive(foo.value) 
 */
const shallow = shallowRef({
  greet: 'Hello, world'
})

// 自定义ref
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
	// triggerRef 手动执行与 shallowRef 关联的任何作用 (effect)
	triggerRef(shallow)
	// console.log(isRef(message));
	console.log(isRef(not));
	my.value = 'WPO'
	obj.name = '笑脸'
	obj.age = 20
}

setTimeout(() => {
	obj.list = [1,2,3,4,5,6,7,8,9,10]

},1000)

setTimeout(() => {
	let  arr = [90,89]
	obj.list.push(...arr)

},2000)

// readonly 将响应式对象,变成只读对象
obj.age = 11
let readonlyObj = readonly<O>(obj)
console.log(readonlyObj);

//shallowReactive 将响应式对象,变成响应式对象,但是不会改变原来的值

let myObj = shallowReactive({
	name:'zzy',
	nav:{
		bar :{
			banner:'xiaoli'
		}
	}
})

const change1 = () =>{
	myObj.name = '张泽雨'

}

const change2 = () =>{
	myObj.nav.bar.banner = '我是小碗'
	console.log(myObj);
}

</script>