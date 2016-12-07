<template>
    <div>
        <button class="btn btn-primary" @click="myInc">Increment</button>
        <button class="btn btn-primary" @click="myDec">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations({
                myInc: 'increment',
                myDec: 'decrement'
            }),
            myOtherMethod(){
                console.log('Other method is running')
            }
        }
    }
</script>