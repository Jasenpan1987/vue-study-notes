import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    age: 30
  },
  methods: {
    changeAge(age){
      this.age = age;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
