<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-14 13:54:02
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 12:20:52
 * @FilePath: \vue3-study\src\view\home\index.vue
-->

<template>
    <Layout></Layout>
</template>

<script lang="ts">
import Layout from '@/layout/index.vue';
import { defineComponent, provide, ref } from 'vue';

const Home = defineComponent({
    components: {
        Layout,
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            console.log('-------beforeRouteEnter');
        });
    },
    beforeRouteUpdate(to, from) {
        console.log(this);
        console.log('--------beforeRouteUpdate');
    },
    beforeRouteLeave(to, from) {
        console.log('----------beforeRouteLeave');
    },
    created() {
        const location = ref('North Pole');
        provide('location', location);
    },
    methods: {},
});

export default Home;
</script>

<style lang="scss"></style>
