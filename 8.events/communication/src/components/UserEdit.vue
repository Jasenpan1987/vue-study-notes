<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{ eventBus.age }}</p>
        <button class="btn btn-primary" @click="changeAge">Change Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        /*props: ['userAge'],*/
        methods: {
            changeAge(){
                //this.$emit("changeAge", 9999)
                eventBus.changeAge(9999);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
