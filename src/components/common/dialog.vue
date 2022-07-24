<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 14:00:45
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-06-10 15:16:18
 * @FilePath: \vue3-study\src\components\common\dialog.vue
-->

<template>
    <div>
        <div class="title">标题-------{{ title }}</div>
        <div v-if="modelValue">
            显示
            <div class="title">标题-------{{ title }}</div>
            <a-button type="primary" @click="close">关闭</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">

type Props = {
    modelValue: boolean;
    title: string;
    modelModifiers?: {
        zzy: boolean;
    };
    titleModifiers?: {
        yang: boolean;
    };
};

const PropsData = defineProps<Props>();

// 派发
const emit = defineEmits(['update:modelValue', 'update:title']);

// 关闭
const close = () => {
    emit('update:modelValue', false);
    emit('update:title', '我是老大');
    console.log(PropsData.titleModifiers);
    if (PropsData.modelModifiers?.zzy) {
        console.log('我是你的老师');
    } else {
        console.log('我是你的老婆');
    }
};
</script>
