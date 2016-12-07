<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <br>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <br><br>
                <app-another-counter></app-another-counter>
                <br><br>
                <app-async-counter></app-async-counter>
                <br><br>
                <hr>
                <h4>
                    If you want to use two way binding (v-model), you need to setup a getter and a setter,
                    or you can simply do v-bind and @input instead
                </h4>
                <input type="text" :value="word" @input="changeInput">
                <p>{{ word }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import AsyncCounter from './components/AsyncCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {

            }
        },
        computed: {
            /*...mapGetters([
                'word'
            ])*/
            word(){
                return this.$store.getters.word;
            }
        },
        methods: {
            changeInput(e){
                //console.log(this.$store.dispatch, e.target.value)
                return this.$store.dispatch('changeWordAct', e.target.value);
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
            appAsyncCounter: AsyncCounter
        }
    }
</script>

