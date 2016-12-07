<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h4>{{ stock.name }}  <small>(Price: {{ stock.price }})</small></h4>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Qty"
                        v-model="qty"
                    >
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-primary"
                        :disabled="qty<=0 || !Number.isInteger(qty)"
                        @click="buyStock"
                    >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],
        data(){
            return {
                qty: 0
            }
        },
        methods: {
            ...mapActions([
                'buyStockAct',
            ]),
            buyStock(){
                this.buyStockAct({ stock: this.stock, qty: this.qty });
                this.qty = 0;
            }
        }
    }
</script>