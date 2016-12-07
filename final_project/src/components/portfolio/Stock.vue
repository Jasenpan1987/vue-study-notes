<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-danger">
            <div class="panel-heading">
                <h4>{{ stockObj.stock.name }}  <small>(Price: {{ stockObj.stock.price }})</small></h4>
            </div>
            <div class="panel-body">
                <div>Number of Owned: {{ stockObj.qty }}</div>
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Sell Qty"
                            v-model="sellQty"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-danger"
                            :disabled="sellQty<=0 || !Number.isInteger(sellQty) || sellQty>stockObj.qty"
                            @click="sellStock"
                    >Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data(){
            return {
                sellQty: 0
            }
        },
        props: ['stockObj'],
        methods: {
            ...mapActions([
                'sellStockAct'
            ]),
            sellStock(){
                this.sellStockAct({
                    stock: this.stockObj.stock,
                    qty: this.sellQty
                })
            }
        }
    }
</script>