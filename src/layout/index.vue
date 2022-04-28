<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 11:16:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 15:04:13
 * @FilePath: \vue3-study\src\layout\index.vue
-->

<template>
    <a-layout class="layout">
        <a-layout-header>
            <Header></Header>
        </a-layout-header>
        <a-layout>
            <a-layout-sider>
                <Menu></Menu>
            </a-layout-sider>
            <a-layout-content>
                <Content ref ='contents' 
                :data="list" 
                @on-click="getList"
                >
                </Content>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>


<script setup lang="ts">
import { reactive , ref , toRaw} from 'vue'
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
import Content from './Content/index.vue';

const  contents = ref(null)
const list = reactive([{
    name:'消息'
}])

const getList =(list:number[]) =>{
    console.log('子组件派发过来的',list)
    console.log('子组件实例', toRaw(contents.value))
}
</script>

<style lang="less" scoped>
.layout {
  min-height: 100%;
}
</style>
