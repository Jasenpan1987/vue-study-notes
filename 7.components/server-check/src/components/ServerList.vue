<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li v-for="machine in machines">
                <my-server :machine="machine"></my-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    export default {
        data: function(){
            return {
                machines: [
                    { id: 0, status: 'OK' },
                    { id: 1, status: 'OK' },
                    { id: 2, status: 'OK' },
                    { id: 3, status: 'Error' },
                    { id: 4, status: 'OK' }
                ]
            }
        },
        components: {
            'my-server': Server
        }
    }
</script>