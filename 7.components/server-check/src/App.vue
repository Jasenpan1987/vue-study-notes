<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <!--<div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>-->
            <server-list></server-list>
            <detail></detail>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyHeader from './components/Header.vue';
    import MyFooter from './components/Footer.vue';
    import Detail from './components/Details.vue';
    import ServerList from './components/ServerList.vue';

    export default {
        data: function(){
            return {}
        },
        components: {
            'my-header': MyHeader,
            'my-footer': MyFooter,
            'detail': Detail,
            'server-list': ServerList
        }
    }
</script>

<style>

</style>
