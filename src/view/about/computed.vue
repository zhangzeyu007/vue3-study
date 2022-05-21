<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-27 15:05:42
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-15 21:10:15
 * @FilePath: \vue3-study\src\view\about\computed.vue
-->
<template>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
    <div>
        {{ name }}
    </div>
    <a-table :dataSource="data" :columns="columns">
        <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'operation'">
                <div class="add">
                    <a-button @click="handle(record, true)">添加</a-button>
                </div>
                <div class="del">
                    <a-button @click="handle(record, false)">删除</a-button>
                </div>
            </template>
        </template>
    </a-table>
    <h1>总价格：{{ $total }}</h1>
</template>

<script setup lang="ts">
// 计算属性
import { computed, ref, reactive } from 'vue';

let firstName = ref('张');
let lastName = ref('泽雨');
let $total = ref(0);
// 计算属性的使用
const name = computed(() => {
    return firstName.value + '--------' + lastName.value;
});

type Shop = {
    name: string;
    num: number;
    price: number;
};
//
const data = reactive<Shop[]>([
    { name: '饼干', num: 1, price: 10 },
    { name: '面包', num: 2, price: 20 },
]);

const columns = [
    {
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '商品数量',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '操作',
        dataIndex: 'operation',
    },
];
const handle = (item: Shop, type: boolean): void => {
    if (item.num > 1 && !type) {
        item.num--;
    }
    if (item.num < 99 && type) {
        item.num++;
    }
};

$total = computed(() => {
    return data.reduce((pre, cur) => {
        return pre + cur.num * cur.price;
    }, 0);
});
</script>
