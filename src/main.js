import { createApp } from "vue";
import * as VueRouter from 'vue-router'
import App from "./App.vue";
import './index.css';
import "./assets/css/reset.css";
import './assets/js/TweenMax.min';
import './assets/js/imagesLoader.min';
// import './assets/js/echarts.min'

const routes = [
    { path: '/buzhi', component: () => import('./pages/buzhi.vue') },
    { path: '/one', component: () => import('./pages/one.vue') },
    { path: '/tailwind', component: () => import('./pages/tailwind.vue') },
    { path: '/', redirect: '/one' }
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

createApp(App).use(router).mount("#app");
