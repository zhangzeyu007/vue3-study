<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 13:58:27
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-30 13:14:30
 * @FilePath: \vue3-study\src\view\about\model.vue
-->
<template>
    <Dialog v-model:title.yang="title" v-model.zzy="flag"></Dialog>
    <a-button @click="flag = !flag">是否显示</a-button>
</template>

<script setup lang="ts">
import Dialog from '@/components/common/dialog.vue';

let flag = ref<boolean>(true);
let title = ref<string>('我是一个人');
</script>
