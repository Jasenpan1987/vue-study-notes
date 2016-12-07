<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <h4>My Name Is: {{name}}</h4>
        <h4>My age is : {{"age"}}</h4>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :username="name" @nameReset="resetName" :resetFn="resetNameFunc"></app-user-detail>
                <button class="btn btn-primary" @click="changeName">Change Name</button>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="eventBus.age" @changeAge="changeAge"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    import { eventBus } from '../main.js';

    export default {
        data: function(){
            return {
                name: "Jasen",
            }
        },
        methods: {
            changeName(){
                this.name = 'Tom'
            },
            resetName(name){
                this.name = name;
            },
            resetNameFunc(){
                this.name = 'Bill';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
