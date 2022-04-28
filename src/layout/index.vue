<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 11:16:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 11:26:20
 * @FilePath: \vue3-study\src\layout\index.vue
-->

<template>
  <div class="main">
	  <div class="main-left">
		  <Menu></Menu>
	  </div>
	  <div class="main-right">
		  <Header></Header>
		  <Content></Content>
	  </div>
  </div>
</template>


<script setup lang="ts">

import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'


</script>


<style lang="less" scoped>


</style>