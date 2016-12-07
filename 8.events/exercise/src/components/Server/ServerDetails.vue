<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <template v-else>
            <p>Server ID: {{server.id}} Server Status: {{server.status}}</p>
            <button class="btn btn-info" @click="resetToNormal">ResetToNormal</button>
        </template>

    </div>

</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        data: function(){
            return {
                server: null
            }
        },
        methods: {
            resetToNormal(){
                this.server.status = 'Normal';
            }
        },
        created(){
            eventBus.$on("showServer", (serverDetail) => {
                this.server = serverDetail;
            })
        }
    }
</script>

<style>

</style>
