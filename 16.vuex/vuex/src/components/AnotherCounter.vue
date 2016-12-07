<template>
    <div>
        <button class="btn btn-primary" @click="increment">AnotherIncrement</button>
        <button class="btn btn-primary" @click="decrement">AnotherDecrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            myotherMethod(){
                console.log('other method runs here')
            }
        }
    }
</script>