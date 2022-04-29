<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 22:21:19
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 12:17:35
 * @FilePath: \vue3-study\src\view\about\Content\C.vue
-->

<template>

 <div>  
	 <div v-for = "item in list">
	  {{item.name}}
	 </div>
 </div>
</template>


<script setup lang="ts">

import {axios} from '../server/server';



const list  = await axios('./data.json')

console.log(list)



</script>