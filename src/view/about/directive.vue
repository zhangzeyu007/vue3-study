<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 14:37:52
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 15:34:55
 * @FilePath: \vue3-study\src\view\about\directive.vue
-->

<template>
    <div>
        <a-button @click="flag = !flag">切换</a-button>
        <G v-if="flag" v-move.zzy="{ background: 'green' }"></G>
        <input v-model="value" type="text" />
        <G v-node="{ background: value }"></G>
    </div>
</template>

<script setup lang="ts">
import G from './Content/G.vue';
import { ref, Directive, DirectiveBinding } from 'vue';
type Dir = {
    background: string;
};

let flag = ref<boolean>(true);
let value = ref<string>('');
const vMove: Directive = {
    created() {
        console.log('Directive--------created');
    },
    beforeMount(el: HTMLElement, dir: DirectiveBinding<Dir>) {
        console.log('Directive--------beforeMount');
        el.style.background = dir.value.background;
    },
    mounted(...args: Array<any>) {
        console.log('Directive--------mounted');
        console.log(args);
    },
    updated() {
        console.log('Directive--------updated');
    },
    beforeUpdate() {
        console.log('Directive--------beforeUpdate');
    },
    unmounted() {
        console.log('Directive--------unmounted');
    },
    render() {
        console.log('Directive--------render');
    },
    // 可以接收参数
    // @ts-ignore
    bind(el: HTMLElement, binding: any) {
        console.log('Directive--------bind');
        console.log(el);
        console.log(binding);
    },
    // 可以接收参数
    // @ts-ignore
    inserted(el: HTMLElement, binding: any) {
        console.log('Directive--------inserted');
        console.log(el);
        console.log(binding);
    },
    // 可以接收参数
    // @ts-ignore
    update(el: HTMLElement, binding: any) {
        console.log('Directive--------update');
        console.log(el);
        console.log(binding);
    },
    // 可以接收参数
    // @ts-ignore
    componentUpdated(el: HTMLElement, binding: any) {
        console.log('Directive--------componentUpdated');
        console.log(el);
        console.log(binding);
    },
    // 可以接收参数
    // @ts-ignore
    unbind(el: HTMLElement, binding: any) {
        console.log('Directive--------unbind');
        console.log(el);
        console.log(binding);
    },
};

const vNode: Directive = (el: HTMLElement, binding: DirectiveBinding<Dir>) => {
    el.style.background = binding.value.background;
};
</script>
