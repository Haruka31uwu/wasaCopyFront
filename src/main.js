import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'; // Importación conjunta
import globalMixin from './mixins/global'
import router from './router/index.js'
import store from './store';
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && isAuthenticated !== '123456') {
    console.log('No autenticado');
    next('/'); // Redirige a la página de inicio si no está autenticado
  } else {
    next();
  }

});
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.mixin(globalMixin)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
