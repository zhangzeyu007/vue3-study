<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 17:00:45
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-03 12:52:00
 * @FilePath: \vue3-study\src\view\about\hooks.vue
-->

<template>
    <div>
        <img id="img" src="../../assets/logo.png" width="300" height="300" />
        <H a="'你好'"></H>
        {{ $filters.formate('我是渣男') }}
        {{ $env }}
        <a-button @click="showLoading">切换</a-button>
        <el-input class="ipt"></el-input>
        {{ Test.name }}----{{ Test.current }}
        <a-button @click="change">打印</a-button>
        <div>actonName-----> {{ Test.name }}</div>
        <div>acitonUser---->{{ Test.user }}</div>
        <div>getters----{{ Test.newName }}</div>
        <el-button @click="reset">reset</el-button>
    </div>
</template>

<script setup lang="ts">
import H from './Content/H.vue';
import useBase64 from '../../utils/hooks';
import { getCurrentInstance, ComponentInternalInstance } from 'vue';
import { useTestSotre } from '../../store';
import { storeToRefs } from 'pinia';

const Test = useTestSotre();
// pinia 解构不具有响应式, 使用storeToRefs解决这个问题
const { current, name } = storeToRefs(Test);

const { appContext } = getCurrentInstance() as ComponentInternalInstance;

const showLoading = () => {
    console.log(appContext.config.globalProperties);
    appContext.config.globalProperties.$loading.show();
    setTimeout(() => {
        appContext.config.globalProperties.$loading.hide();
    }, 3000);
};

const change = () => {
    console.log('结构出来的值', current, name);
    Test.current++;
    Test.setUser();
};

const reset = () => {
    Test.$reset();
};

Test.$subscribe(
    (args, state) => {
        console.log('$subscribe--args', args);
        console.log('$subscribe--state', state);
    },
    {
        detached: true,
        deep: true,
        flush: 'post',
    }
);

Test.$onAction((args) => {
    args.after(() => {
        console.log('$onAction--after');
    });
    console.log('$onAction', args);
});
// 使用hooks
useBase64({
    el: '#img',
}).then((res) => {
    console.log(res.baseUrl);
});
</script>

<style lang="less" scoped>
.ipt {
    /deep/ input {
        background: red;
    }
    :deep(input) {
        background: blue;
    }
}
</style>
