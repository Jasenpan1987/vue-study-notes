<template>
    <div>
        <h1>个人信息</h1>
        <h2>持有现金: {{ fund | currencyFilter }}</h2>
        <br><hr><br>
        <div v-if="ownedStocks.length!=0">
            <h2>持有股票：</h2>
            <app-stock v-for="stock in ownedStocks" :stock="stock"></app-stock>
        </div>
        <div v-else>
            <h3>您目前没有持有任何股票，快去买进点吧。。。</h3>
            <div>
                <router-link to="/stocks" tag="button" class="btn btn-primary" >带我去股票页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'Vuex';

    import StockPanel from './StockPanel.vue';

    export default {
        computed: {
            ...mapGetters([
                'ownedStocks',
                'fund'
            ])
        },
        components: {
            appStock: StockPanel
        }
    }
</script>