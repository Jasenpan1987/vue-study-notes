<template>
    <div>
        <h1>Stock</h1>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>
<script>
    import { mapGetters } from 'Vuex';

    import StockPanel from './StockPanel.vue';

    export default {
        computed: {
            ...mapGetters([
                'stocks'
            ])
        },
        components: {
            appStock: StockPanel
        }
    }
</script>