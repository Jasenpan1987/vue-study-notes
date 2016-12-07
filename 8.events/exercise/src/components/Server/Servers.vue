<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item v-for="server in servers" :server="server"></server-item>
        </ul>
    </div>
</template>

<script>
    import ServerListItem from './ServerListItem.vue';

    export default {
        data: function(){
            return {
                servers: [
                    {id: "1", status: "Normal"},
                    {id: "2", status: "Normal"},
                    {id: "3", status: "Error"},
                    {id: "4", status: "Unknown"},
                    {id: "5", status: "Normal"},
                ]
            }
        },
        components: {
            'server-item': ServerListItem
        }
    }
</script>

<style>

</style>
