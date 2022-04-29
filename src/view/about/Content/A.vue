<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 19:17:19
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 13:35:52
 * @FilePath: \vue3-study\src\view\about\Content\A.vue
-->

<template>

 <div>
	<input type="text" placeholder="AAAAAAAAAAA">
 </div>
</template>


<script setup lang="ts">

import {onMounted,onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, reactive, markRaw} from 'vue';




onMounted(() => {
	console.log('A 的----- mounted--生命周期');
});

onUpdated(() => {
	console.log('A 的----- updated--生命周期');
});

onUnmounted(() => {
	console.log('A 的----- unmounted--生命周期');
});
</script>