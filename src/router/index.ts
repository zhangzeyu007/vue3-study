/*
 * @Author: 张泽雨
 * @Date: 2022-04-14 13:55:48
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-01 17:01:24
 * @FilePath: \vue3-study\src\router\index.ts
 */
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'


// 路由配置
const Home = () => import('@/view/home/index.vue');
const Reactive = () => import('@/view/about/reactive.vue');
const toRef = () => import('@/view/about/toRef.vue');
const Computed = () => import('@/view/about/computed.vue');
const Watch = () => import('@/view/about/watch.vue');
const Component = () => import('@/view/about/component.vue');
const keepAlive = () => import('@/view/about/keepAlive.vue');
const Transition = () => import('@/view/about/transition.vue');
const Jsx = () => import('@/view/about/jsx.vue');
const Model = () => import('@/view/about/model.vue');
const Directive = () => import('@/view/about/directive.vue');
const Hooks = () => import('@/view/about/hooks.vue');


const routes: Array<RouteRecordRaw> = [
	{
		path: `/home`,
		name: 'Home',
		component: Home,
		// 独享守卫
		beforeEnter: (to, from) => {
			console.log('beforeEnter-------------');
		},
	},
	{
		path: `/reactive`,
		name: 'reactive',
		component: Reactive,
	},
	{
		path: `/toRef`,
		name: 'toRef',
		component: toRef,
	},
	{
		path: `/computed`,
		name: 'computed',
		component: Computed,
	},
	{
		path: `/watch`,
		name: 'watch',
		component: Watch,
	},
	{
		path: `/component`,
		name: 'component',
		component: Component,
	},
	{
		path: `/keepAlive`,
		name: 'keepAlive',
		component: keepAlive,
	},
	{
		path: `/transition`,
		name: 'transition',
		component: Transition,
	},
	{
		path: `/jsx`,
		name: 'jsx',
		component: Jsx,
	},
	{
		path: `/model`,
		name: 'model',
		component: Model,
	},
	{
		path: `/directive`,
		name: 'directive',
		component: Directive,
	},
	{
		path: `/hooks`,
		name: 'hooks',
		component: Hooks,
	},

];

// 创建路由
const router = createRouter({
	history: createWebHistory(),
	routes
});
// 全局路由守卫分为三种:
// 全局前置守卫
router.beforeEach((to, from, next) => {
	console.log('beforeEach------------------');
	// console.log(to);
	// console.log(from);
	next()
})
// 全局解析守卫
router.beforeResolve(async to => {
	console.log('beforeResolve-------------------------------');
	// console.log(to);
})

// 全局后置守卫
router.afterEach((to, from) => {
	console.log('afterEach-------------------------------');
	// console.log(to);
})

export default router;