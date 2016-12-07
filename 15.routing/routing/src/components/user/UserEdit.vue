<template>
    <div>
        <h3>Edit the User</h3>
        <br>
        <h4>UserId: {{ $route.params.id }}</h4>
        <!-- <router-link to="/user/999/edit"><a>User 999</a></router-link> -->
        <h4>Locale: {{ $route.query.locale }}</h4>
        <h4>Keyword: {{ $route.query.q }}</h4>
        <div style="height: 900px;"></div>
        <h4 id="somehere">Some place you want to see</h4>
        <br><br>
        <h3>You have click the Save button before leave</h3>
        <br><br>
        <button class="btn btn-success" @click="saved = true">Save</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                saved: false
            }
        },
        beforeRouteLeave(from, to, next){
            if(this.saved){
                next();
            }else{
                if(confirm('Are you sure you want to leave before save?')){
                    next();
                }else{
                    next(false);
                }
            }
        }
    }
</script>