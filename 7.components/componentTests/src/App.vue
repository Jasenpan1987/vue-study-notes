<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <my-comp></my-comp>
  </div>
</template>

<script>
import myComp from './myComp.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'my-comp': myComp
  }
}
</script>

<style>
</style>
