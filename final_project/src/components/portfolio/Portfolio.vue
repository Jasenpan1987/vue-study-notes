<template>
    <div>
        <h2>Current Fund : {{ user.fund }}</h2>
        <h2>Owned Stocks</h2>
        <br><br><hr>
        <app-stock
                v-for="stock in ownedStocks"
                :stockObj="stock"
        ></app-stock>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                user: 'user'
            }),
            ownedStocks(){
                return this.user.ownedStocks
            },
        },
        components: {
            appStock: Stock
        }
    }
</script>