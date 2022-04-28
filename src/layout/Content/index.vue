<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 11:16:26
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 14:47:36
 * @FilePath: \vue3-study\src\layout\Content\index.vue
-->


<template>
 <div>
	 {{title}}
	 {{data}}
 </div>
 <div>
	 <button @click="clickTap">派发</button>
 </div>

</template>


<script setup lang="ts">
import  { reactive } from 'vue'

type Props = {
	title?: string,
	data?: Array<any>
}
const list = reactive<number[]>([6,6,6,6])

// 设置props 的 默认值
withDefaults(defineProps<Props>(),{
	title:"你好",
	data:() =>[1,2,3,4]
})

defineExpose({
list
})



const emit = defineEmits(['on-click'])
const clickTap = () => {
	console.log('派发')
	// 子组件派发给父组件
	emit('on-click' , list)
}

</script>


<style lang="less" scoped>


</style>