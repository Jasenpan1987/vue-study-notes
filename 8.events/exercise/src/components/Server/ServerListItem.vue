<template>
    <li class="list-group-item" :class="serverStyle">
        Server # {{server.id}} - {{server.status}}
        <button class="btn btn-default" @click="showServer">Check</button>
    </li>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        props: ['server'],
        computed: {
            serverStyle: function(){
                switch (this.server.status){
                    case 'Error':
                        return 'list-group-item-danger';
                    case 'Unknown':
                        return 'list-group-item-warning';
                    default:
                        return 'list-group-item-success';
                }
            }
        },
        methods: {
            showServer(){
                eventBus.$emit("showServer", this.server);
            }
        }
    }

</script>