<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 12:15:38
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-06-12 22:20:50
 * @FilePath: \vue3-study\src\view\about\jsx.vue
-->

<template>
    <div>
        <renderDom :title="'我周四'"></renderDom>
        <a-button @click="topClick">按钮</a-button>
        <div>{{ flag }}</div>
    </div>
</template>

<script setup lang="ts">

import renderDom from './app';

const flag = ref(true);

const topClick = () => {
    flag.value = !flag.value;
};
</script>
