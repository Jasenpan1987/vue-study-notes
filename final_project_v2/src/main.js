import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-473f9.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.filter('currencyFilter', function (value) {
  return '$'+ value.toFixed(2);
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
