import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){ //if it has the saved position, means we go to somewhere else and come back
      return savedPosition;
    }

    if(to.hash){ //if we have a hash property on the to link,
      return {
        selector: to.hash
      }
    }

    return { //if none of the above, we directly go to the very top left point of the page
      x: 0, y: 0
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
