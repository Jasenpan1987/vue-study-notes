import Vue from 'vue'
import App from './App.vue'

Vue.filter('addSmileFaceGlobal', function(value){
  return value+' : )';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
