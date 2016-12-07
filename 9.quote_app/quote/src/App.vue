<template>
    <!--<app-quote>-->
        <!--<h2 slot="title">{{quote}}</h2>-->
        <!--<p>This is a very good quote!</p>-->
        <!--<h4 slot="subtitle">Cool subtitle!!!</h4>-->
    <!--</app-quote>-->

    <div>
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        {{selectedComponent}}
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import Author from './components/Author.vue';
import New from './components/New.vue';
import Quote from './components/Quote.vue';

export default {
  name: 'app',
  data () {
    return {
        quote: "AWSOME QUOTE",
        selectedComponent: "appQuote"
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>

</style>
