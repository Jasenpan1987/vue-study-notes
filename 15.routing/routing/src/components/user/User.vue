<template>
    <div>
        <h1>The User Page</h1>
        <br>
        <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
        <br><br>
        <router-view></router-view>
    </div>

</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            navigateToHome(){
                this.$router.push({ path: "/" })
            }
        }
    }
</script>