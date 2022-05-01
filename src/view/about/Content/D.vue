<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-30 15:16:18
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 12:09:58
 * @FilePath: \vue3-study\src\view\about\Content\D.vue
-->

<template>
    <div>
        <button @click="sndEmit">派发一个事件</button>
    </div>
</template>

<script setup lang="ts">
import Bus from '../../../utils/Bus';
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
const emit = defineEmits(['on-click']);
let flag = false;
const sndEmit = () => {
    flag = !flag;
    emit('on-click', flag);
    Bus.emit('send', '我是子组件');
    instance?.proxy?.$Bus.emit('go', '我是mitt派发的的消息');
};
</script>

<style lang="less" scoped></style>
