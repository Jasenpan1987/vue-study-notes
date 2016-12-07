<template>
    <div class="container">
        <div class="row">
            <app-header></app-header>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import { mapActions } from 'vuex';

    export default {
        components: {
            appHeader: Header
        },
        methods: {
            ...mapActions([
                'initStocks'
            ])
        },
        created(){
            this.initStocks();
            //this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
