<template>
    <div>
        <h3>Some User Details</h3>
        <router-link
                :to="toLink"
                tag="button"
                class="btn btn-danger"
        >
            Edit User {{ $route.params.id }}
        </router-link>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';

    export default {
        data(){
            return {
                toLink: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale:'en',
                        q: 'hello world'
                    },
                    hash: "#somehere"
                }
            }
        },
        // we can set up this protect route strategy from 3 places
        // 1. in the global router setup
        // 2. in the previous route
        // 3. here, like this
        beforeRouteEnter(from, to, next){
            //this is a lifecycle method created by vue router
            //and we can not access anything within this route at this point, such as data (toLink)
            //if we really have to check the data or other property before this page get rendered, we
            //can do it like next(vm => { vm.toLink... })

            if(true){ //we should setup our authentication check here
                next();
            }else{
                //next(false); //abort this action
                next(vm => { // pull out the vm (this) before the page get rendered, and executing the router.push
                    vm.$router.push('/')
                })
            }
        }
    }
</script>