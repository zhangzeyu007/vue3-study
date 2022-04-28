<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-28 14:55:48
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-28 15:30:59
 * @FilePath: \vue3-study\src\components\Card\index.vue
-->

<template>
    <div class="card">
        <div class="card-header">
            <div>主标题</div>
            <div>副标题</div>
        </div>
        <div class="card-content" v-if="content">
            {{ content }}
        </div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    content?: string;
};

defineProps<Props>();

</script>

<style lang="less" scoped>

@border: #eee;

.card {
    border: 1px solid @border;
    &:hover {
        box-shadow: 0px 0px 10px @border;
    }
    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid @border;
    }
    &-content {
        padding: 10px;
    }
}
</style>
