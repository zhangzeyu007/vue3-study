<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-02 12:07:36
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-02 14:19:58
 * @FilePath: \vue3-study\src\packages\loading\index.vue
-->

<template>
    <div v-if="isShow" class="loading">
        <div class="loading-content">loading......</div>
    </div>
</template>

<script setup lang="ts">
let isShow = ref<boolean>(false);

const show = () => {
    isShow.value = true;
};

const hide = () => {
    isShow.value = false;
};

defineExpose({
    isShow,
    show,
    hide,
});
</script>
<style lang="less">
.loading {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 32px;
        color: red;
    }
}
</style>
