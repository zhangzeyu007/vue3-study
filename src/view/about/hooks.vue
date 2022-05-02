<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 17:00:45
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-02 14:43:27
 * @FilePath: \vue3-study\src\view\about\hooks.vue
-->

<template>
    <div>
        <img id="img" src="../../assets/logo.png" width="300" height="300" />
        <H a="'你好'"></H>
        {{ $filters.formate('我是渣男') }}
        {{ $env }}
        <a-button @click="showLoading">切换</a-button>
    </div>
</template>

<script setup lang="ts">
import H from './Content/H.vue';
import useBase64 from '../../utils/hooks';
import { getCurrentInstance, ComponentInternalInstance } from 'vue';

const { appContext } = getCurrentInstance() as ComponentInternalInstance;

const showLoading = () => {
    console.log(appContext);
    appContext.config.globalProperties.$loading.show();
    setTimeout(() => {
        appContext.config.globalProperties.$loading.hide();
    }, 3000);
};

useBase64({
    el: '#img',
}).then((res) => {
    console.log(res.baseUrl);
});
</script>
