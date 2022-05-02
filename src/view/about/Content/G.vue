<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-05-01 14:48:24
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 17:15:39
 * @FilePath: \vue3-study\src\view\about\Content\G.vue
-->

<template>
    <div v-move class="content">
        <div class="title">移动指令</div>
    </div>
</template>

<script setup lang="ts">
import { ref, Directive, DirectiveBinding } from 'vue';

type Dir = {
    background: string;
};
const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
    console.log(moveElement);
    const moveDown = (e: MouseEvent) => {
        let X = e.clientX - el.offsetLeft;
        let Y = e.clientY - el.offsetTop;
        const move = (e: MouseEvent) => {
            console.log(e);
            el.style.left = e.clientX - X + 'px';
            el.style.top = e.clientY - Y + 'px';
        };
        document.addEventListener('mousemove', move);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        });
    };
    moveElement.addEventListener('mousedown', moveDown);
};
</script>

<style lang="less">
.content {
    width: 200px;
    height: 200px;
    background: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        fontsize: 20px;
    }
}
</style>
