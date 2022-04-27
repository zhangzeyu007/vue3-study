<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-27 14:18:29
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-27 14:47:26
 * @FilePath: \vue3-study\src\view\about\toRef.vue
-->

<template>
    <div>
        <div>{{ obj }}</div>
		<h1>{{state}}</h1>
        <button @click="change">点击</button>
		 <h2>{{bar}}</h2>
		 <h2>{{foo}}</h2>
    </div>
</template>

<script setup lang="ts">
import {toRef, toRefs,reactive } from 'vue';

// 原始对象是响应式, 页面是发生变化的
const obj =reactive({
    foo: '2',
    bar: 1,
})

const state = toRef(obj, 'bar');

const change = () => {
    state.value++;
	console.log('原始对象-----', obj);
	console.log('state-----', state);	
};

// toRefs 解构变成响应式数据
const { bar , foo} = toRefs(obj)

</script>
