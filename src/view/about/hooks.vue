<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 17:00:45
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 17:45:02
 * @FilePath: \vue3-study\src\view\about\hooks.vue
-->

<template>
    <div>
        <img id="img" src="../../assets/logo.png" width="300" height="300" />
        <H a="'你好'"></H>
    </div>
</template>

<script setup lang="ts">
import H from './Content/H.vue';
import useBase64 from '../../utils/hooks';

useBase64({
    el: '#img',
}).then((res) => {
    console.log(res.baseUrl);
});
</script>
