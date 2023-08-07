import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/components/Auth/MainPage.vue';
import MainChat from '@/components/MainChat'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage,meta: { requiresAuth: false }},
  { path: '/chat', component: MainChat,meta: { requiresAuth: true } },
];

const router = new VueRouter({
  routes,
});

export default router;
