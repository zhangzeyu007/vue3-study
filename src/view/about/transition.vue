<!--
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-04-29 14:06:22
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-29 20:02:11
 * @FilePath: \vue3-study\src\view\about\transition.vue
-->

<template>
    <a-button @click="flag = !flag">切换</a-button>
    <a-button @click="add">add</a-button>
    <a-button @click="del">del</a-button>
    <a-button @click="random">随机</a-button>
    <div class="wraps">
        <!-- 列表过渡 -->
        <transition-group
            leave-active-class="animate__animated animate__rotateInDownLeft"
            enter-active-class="animate__animated animate__jackInTheBox"
        >
            <div v-for="(item, index) in list" :key="index" class="group-list">
                {{ item.name }}
            </div>
        </transition-group>
    </div>
    <!-- 平面过渡 -->
    <div class="wraps-list">
        <transition-group move-class="mmm">
            <div v-for="item in numList" :key="item.id" class="items">
                {{ item.number }}
            </div>
        </transition-group>
    </div>
    <!-- 状态过渡 -->
    <input step="20" type="number" v-model="num.current" />
    <div>
        {{ num.tweenedNumber.toFixed(0) }}
    </div>
    <!-- 过渡 -->
    <transition
        name="fade"
        :duration="500"
        appear
        appear-active-class="animate__animated animate__rotateInDownLeft"
        enter-from-class="e-from"
        enter-active-class="animate__animated animate__backOutDown"
        leave-active-class="animate__animated animate__fadeIn"
        @before-enter="EnterFrom"
        @enter="EnterActive"
        @after-enter="EnterTo"
        @enter-cancelled="EnterCancelled"
        @before-leave="beforeLeave"
        @leave="Leave"
        @after-leave="LeaveTo"
        @leave-cancelled="LeaveCancelled"
    >
        <div v-if="flag" class="box"></div>
    </transition>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import 'animate.css';
import gsap from 'gsap';
import _ from 'lodash';

const flag = ref<boolean>(true);

type List = {
    name: string;
};
const list = reactive<List[]>([
    {
        name: '张泽雨',
    },
    {
        name: '梨子',
    },
    {
        name: '换吗',
    },
    {
        name: '妈妈',
    },
]);
let numList = ref(
    Array.apply(null, { length: 80 } as number[]).map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1,
        };
    })
);

const num = reactive({
    current: 0,
    tweenedNumber: 0,
});

watch(
    () => num.current,
    (newVal) => {
        gsap.to(num, {
            tweenedNumber: newVal,
            duration: 1,
        });
    }
);

// 方法
const add = () => {
    list.push({ name: '添加' });
};

const del = () => {
    list.pop();
};

// 随机
const random = () => {
    numList.value = _.shuffle(numList.value);
};

// 过渡的生命周期函数
const EnterFrom = (el: Element) => {
    console.log('EnterFrom----- 进入之前');
    gsap.set(el, {
        width: '100px',
        height: '100px',
    });
};

const EnterActive = (el: Element, done: gsap.Callback) => {
    console.log('EnterActive-----过渡曲线');
    console.log(el);
    setTimeout(() => {
        done();
    }, 3000);

    gsap.to(el, {
        width: '300px',
        height: '300px',
        onComplete: done,
    });
};

const EnterTo = (el: Element) => {
    console.log('EnterTo-------过渡完成');
};

const EnterCancelled = (el: Element) => {
    console.log('EnterCancelled----过渡效果被打断');
};

const beforeLeave = (el: Element) => {
    console.log('beforeLeave----离开之前过渡曲线');
};

const Leave = (el: Element) => {
    console.log('Leave-------离开之后');
};

const LeaveTo = (el: Element) => {
    console.log('LeaveTo-------离开过渡完成');
};

const LeaveCancelled = (el: Element) => {
    console.log('LeaveCancelled----离开过渡效果被打断');
};
</script>

<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: red;
}
.e-from {
    width: 0px;
    height: 0px;
    transform: rotate(360deg);
}
.fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);
}
.fade-leave-active {
    transition: all 5s ease;
}

.fade-enter-active {
    transition: all 1.5s ease;
}

.fade-enter-to {
    width: 200px;
    height: 200px;
}

.fade-leave-to {
    width: 0;
    height: 0;
}

.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
}
.group-list {
    margin: 10px;
    padding: 10px;
    background: #ccc;
}

.wraps-list {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.mmm {
    transition: all 1s;
}
</style>
