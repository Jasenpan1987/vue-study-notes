<template>
    <div>
        <button class="btn btn-warning" @click="asyncIncAct({amount: 5})">AnotherIncrement</button>
        <button class="btn btn-warning" @click="asyncDecAct({amount: 5})">AnotherDecrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncAct',
                'asyncDecAct'
            ]),
            myotherMethod(){
                console.log('other method runs here')
            }
        }
    }
</script>