<template>
    <div class="row">
        <app-stock v-for="stock in stocks"
               :stock="stock"
        ></app-stock>
    </div>
</template>
<script>
    import StockPanel from './StockPanel.vue';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stocks',
                user: 'user'
            }),
        },
        components: {
            appStock: StockPanel
        },

    }
</script>