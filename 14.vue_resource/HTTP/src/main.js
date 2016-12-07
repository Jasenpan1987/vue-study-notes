import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = "https://vue-http-test.firebaseio.com";

Vue.http.interceptors.push((request, next) => {
  if(request.method == 'GET'){
    console.log("A get request is fired");
    console.log(request);
  }
  next((response) => {
    console.log(response);
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
