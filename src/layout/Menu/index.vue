<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 11:16:08
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 12:12:11
 * @FilePath: \vue3-study\src\layout\Menu\index.vue
-->

<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
    >
        <a-menu-item key="1">
            <template #icon>
                <PieChartOutlined />
            </template>
            <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
            <template #icon>
                <DesktopOutlined />
            </template>
            <span>Option 2</span>
        </a-menu-item>
        <a-menu-item key="3">
            <template #icon>
                <InboxOutlined />
            </template>
            <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
            <template #icon>
                <MailOutlined />
            </template>
            <template #title>Navigation One</template>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #icon>
                <AppstoreOutlined />
            </template>
            <template #title>Navigation Two</template>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
        </a-sub-menu>
    </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        PieChartOutlined,
        MailOutlined,
        DesktopOutlined,
        InboxOutlined,
        AppstoreOutlined,
    },
    setup() {
        const state = reactive({
            collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
        });

        watch(
            () => state.openKeys,
            (_val, oldVal) => {
                state.preOpenKeys = oldVal;
            }
        );
        const toggleCollapsed = () => {
            state.collapsed = !state.collapsed;
            state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };

        return {
            ...toRefs(state),
            toggleCollapsed,
        };
    },
});
</script>

<style lang="less" scoped></style>
