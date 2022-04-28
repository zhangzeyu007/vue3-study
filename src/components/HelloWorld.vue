<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 10:05:26
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 11:08:23
 * @FilePath: \vue3-study\src\components\HelloWorld.vue
-->

<template>
    <input type="text" name="" placeholder="你好" />
    <div>{{ num }}</div>
    <a-button @click="num++">增加</a-button>
</template>

<script setup lang="ts">
/// 父子组件的生命周期
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';

const num = ref(0);

onBeforeMount(() => {
    console.log('子组件---挂载之前---onBeforeMount');
});

onMounted(() => {
    console.log('子组件---挂载----onMounted');
});

onBeforeUpdate(() => {
    console.log('子组件---更新之前----onBeforeUpdate');
});

onUpdated(() => {
	console.log('子组件---完成更新--onUpdate');
});

onBeforeUnmount(() => {
    console.log('子组件---卸载之前-----onBeforeUnmount');
});

onUnmounted(() => {
    console.log('子组件---卸载完成----onUnmounted');
});
</script>
