<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-29 14:06:22
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 14:43:12
 * @FilePath: \vue3-study\src\view\about\transition.vue
-->

<template>

<a-button @click="flag = !flag">切换</a-button>

<transition name="fade">
  <div v-if="flag" class="box" ></div>
</transition>

</template>


<script setup lang="ts"> 

import {ref } from 'vue'

const flag = ref<boolean>(true)


</script>

<style lang="less" scoped>
.box {
	width: 200px;
	height: 200px;
	background: red;
}
.fade-enter-from {
	width: 0px;
	height: 0px;
}
.fade-leave-from {
	width: 200px;
	height: 200px;
}
.fade-leave-active {
	transition:all 5s ease;
}

.fade-enter-active {
	transition: all 1.5s ease;
}

.fade-enter-to {
   width: 200px;
   height: 200px;
}

.fade-leave-to {
 width: 0;
 height: 0;
}



</style>