<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-29 12:48:03
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 13:31:27
 * @FilePath: \vue3-study\src\view\about\keepAlive.vue
-->

<template>

 <keep-alive>
    <component :is="current.comName"></component>
 </keep-alive>
 
  <component :is="current.comName"></component>

  <a-button @click ="swichCom">切换动态组件</a-button>


</template>


<script setup lang="ts">
import {
	ref,
    reactive,
	markRaw
} from 'vue';
import A from './Content/A.vue';
import B from './Content/B.vue';


type Tabs = {
    name: string;
    comName: any;
};

type Com = Pick<Tabs, 'comName'>;

const flag = ref(true)

// tabs 数据
const tabs = reactive<Tabs[]>([
    {
        name: 'A',
        comName: markRaw(A),
    },
    {
        name: 'B',
        comName: markRaw(B),
    },
]);

let current = reactive<Com>({
    comName: tabs[0].comName,
});


const swichCom = () => {
	flag.value = !flag.value
	console.log(flag.value);
     if (flag.value) {
		current.comName =tabs[0].comName
	 }else {
		current.comName =tabs[1].comName
	 }
};

</script>
