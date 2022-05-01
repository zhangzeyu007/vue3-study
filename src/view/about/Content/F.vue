<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-30 15:16:28
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 12:10:04
 * @FilePath: \vue3-study\src\view\about\Content\F.vue
-->

<template>
    <div>哈哈</div>
</template>

<script setup lang="ts">
import Bus from '../../../utils/Bus';
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

instance?.proxy?.$Bus.on('go', (msg: string) => {
    console.log(msg);
});

Bus.on('send', (data: string) => {
    console.log(data);
});
</script>

<style lang="less" scoped></style>
