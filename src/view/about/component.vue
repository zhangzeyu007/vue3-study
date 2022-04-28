<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 09:59:12
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 15:24:15
 * @FilePath: \vue3-study\src\view\about\component.vue
-->

<template>

<HelloWorld v-if="flag"></HelloWorld>
<a-button @click="flag = !flag">改变组件状态</a-button>
<Card :content="`我是你的人`"></Card>
</template>

<script setup lang="ts">

import HelloWorld from "@/components/HelloWorld.vue"
import { ref , onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,} from 'vue'

const flag = ref(true)

const change = () =>{
 
}

onBeforeMount(()=>{
	console.log('父组件----挂载之前---onBeforeMount');
})

onMounted(()=>{
	console.log('父组件----挂载----onMounted');
})

onBeforeUpdate(()=>{
	console.log('父组件----更新之前----onBeforeUpdate');
})

onUpdated(()=>{
	console.log('父组件----完成更新--onUpdate');
})

onBeforeUnmount(()=>{
	console.log('父组件----卸载之前-----onBeforeUnmount');
})

onUnmounted(()=>{
	console.log('父组件----卸载完成----onUnmounted');
})

</script>