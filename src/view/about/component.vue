<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 09:59:12
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 12:45:05
 * @FilePath: \vue3-study\src\view\about\component.vue
-->

<template>
    <HelloWorld v-if="flag"></HelloWorld>
    <a-button @click="flag = !flag">改变组件状态</a-button>
    <Card :content="`我是你的人`"></Card>
    <Tree @on-click="getItem" :data="data"></Tree>
    <div>
        <a-button @click="swichBtn(item)" type="primary" style="margin-left: 10px" :key="item.name" v-for="item in tabs"
            >我是组件{{ item.name }}</a-button
        >
    </div>
    <component :is="current.comName"></component>
    <Suspense>
        <template #default>
            <C></C>
        </template>
        <template #fallback>
            <div>loading...</div>
        </template>
    </Suspense>
    <teleport to="#app">
        <div class="box">你好吗</div>
    </teleport>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import {
    ref,
    reactive,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    markRaw,
    defineAsyncComponent,
} from 'vue';
import A from './Content/A.vue';
import B from './Content/B.vue';
import Tree from '@/components/Tree/index.vue';
//异步组件
const C = defineAsyncComponent(() => import('./Content/C.vue'));

type TreeList = {
    name: string;
    children?: TreeList[] | [];
};

type Tabs = {
    name: string;
    comName: any;
};

type Com = Pick<Tabs, 'comName'>;

const flag = ref(true);
const data = reactive<TreeList[]>([
    {
        name: 'no-1',
        children: [
            {
                name: 'no-1-1',
                children: [
                    {
                        name: 'no-1-1-1',
                        children: [
                            {
                                name: 'no-1-1-1-1',
                                children: [],
                            },
                            {
                                name: 'no-1-1-1-2',
                                children: [
                                    {
                                        name: 'no-1-1-1-2-1',
                                        children: [],
                                    },
                                    {
                                        name: 'no-1-1-1-2-2',
                                        children: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

const getItem = (item: TreeList) => {
    console.log(item);
};

// tabs 数据
const tabs = reactive<Tabs[]>([
    {
        name: 'A',
        comName: markRaw(A),
    },
    {
        name: 'B',
        comName: markRaw(B),
    },
]);

let current = reactive<Com>({
    comName: tabs[0].comName,
});
// 切换动态组件
const swichBtn = (item: Tabs) => {
    current.comName = item.comName;
};

onBeforeMount(() => {
    console.log('父组件----挂载之前---onBeforeMount');
});

onMounted(() => {
    console.log('父组件----挂载----onMounted');
});

onBeforeUpdate(() => {
    console.log('父组件----更新之前----onBeforeUpdate');
});

onUpdated(() => {
    console.log('父组件----完成更新--onUpdate');
});

onBeforeUnmount(() => {
    console.log('父组件----卸载之前-----onBeforeUnmount');
});

onUnmounted(() => {
    console.log('父组件----卸载完成----onUnmounted');
});
</script>

<style lang="less" scoped>
.box {
    width: 100px;
    height: 100px;
    background: red;
}
</style>