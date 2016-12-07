<template>
    <div>
        <h1>Author Component</h1>
        <button @click="counter++">Increase Counter</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                counter: 0
            }
        },
        activated(){
            console.log('this component is activated')
        },
        deactivated(){
            console.log('this component is DEactivated!')
        }
    }
</script>
<style>
</style>