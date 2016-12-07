<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-danger">
            <div class="panel-heading">
                <h4>{{ stock.name }}  <small>(当前价格: {{ stock.price }} | 所持数量: {{ stock.qty }})</small></h4>
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
                            class="btn btn-danger"
                            :disabled="qty<=0 || !Number.isInteger(qty) || (qty>stock.qty)"
                            @click="releaseStock"
                    >卖出</button>
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
                'sellStock'
            ]),
            releaseStock(){
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    qty: this.qty,
                }
                this.sellStock(order);
                this.qty = 0;
            }
        }
    }
</script>