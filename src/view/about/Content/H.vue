<template>
    <div class="H"></div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

let attr = useAttrs();
console.log(attr);
</script>

<style lang="less">
.H {
    width: 100px;
    height: 100px;
    background: #f00;
}
</style>
