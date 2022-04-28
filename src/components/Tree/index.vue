<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 15:50:41
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 19:10:54
 * @FilePath: \vue3-study\src\components\Tree\index.vue
-->


<template>
    <div style ="margin-left:10px">
		<div
		 @click.stop="clickItem(item)" 
		:key = 'index' 
		v-for="(item , index) in data">
		 {{item.name}}
		<TreeItem
		@on-click="clickItem"
		 v-if="item?.children?.length"
		 :data="item.children">
		 </TreeItem>
		</div>
	</div>
</template>

<script setup lang="ts"> 

import TreeItem from  './index.vue'

type TreeList = {
	name: string,
	children?: TreeList[] | []
}

type Props = {
  data?:TreeList[]
}

defineProps<Props>()

const emit = defineEmits(['on-click'])

const clickItem = (item:TreeList) => {
 emit('on-click', item)
}

</script>