<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h4>{{ stock.name }}  <small>(当前价格: {{ stock.price }})</small></h4>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="买入数量"
                            v-model="qty"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-primary"
                            :disabled="qty<=0 || !Number.isInteger(qty) || !(stock.price * qty <= fund)"
                            @click="purchaseStock"
                    >买入</button>
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
        computed: {
            fund(){
                return this.$store.getters.fund;
            }
        },
        methods: {
            ...mapActions([
                'buyStock'
            ]),
            purchaseStock(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    qty: this.qty,
                }
                this.buyStock(order);
                this.qty = 0;
            },
            /*checkEnoughFund(){
                return this.stock.price * this.qty <= this.fund
            }*/
        }
    }
</script>