<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button class="btn btn-primary" @click="resetName">Switch Name</button>
        <button class="btn btn-success" @click="resetFn">Reset Name Fn</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            username: {
                type: String
            },
            resetFn: Function,
        },
        methods: {
            switchName(){
                return this.username.toUpperCase();
            },
            resetName(){
                //this.username = "Jasen"
                this.$emit("nameReset", "Jasen");
            }
        },
        /*created(){
            eventBus.$on("changeAge", (age) => {
                console.log('attempting to change age with '+age)
                this.userAge = age;
            })
        }*/
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
