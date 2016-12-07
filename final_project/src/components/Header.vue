<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link :to="{ name: 'home' }" ><a class="navbar-brand">Stock Trade</a></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link :to="{ name: 'portfolio' }" tag="li" active-class="active">
                        <a> Portfolio </a>
                    </router-link>

                    <router-link :to="{ name: 'stocks' }" tag="li" active-class="active">
                        <a> Stock </a>
                    </router-link>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><strong>Total Fund: {{ user.fund }}</strong></a></li>
                    <li><a @click="changeStockPrice" style="cursor: pointer;">End Day</a></li>
                    <li><a @click="saveDayAct" style="cursor: pointer;">Save Day</a></li>
                    <li><a @click="loadDayAct" style="cursor: pointer;">Load Day</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">Save & Load
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                        </ul>
                    </li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
     computed: {
            ...mapGetters({
                stocks: 'stocks',
                user: 'user'
            }),
        },
        beforeMount(){
            /*this.user.ownedStocks.forEach((stockObj) => {
                console.log(stockObj.stock.name)
            })*/
            console.log('b4create', this.$store.state)
        },
        methods: {
            ...mapActions([
                'changePriceAct',
                'saveDayAct',
                'loadDayAct'
            ]),
            changeStockPrice(){
                this.changePriceAct();
            }
        }
    }
</script>
<style>
    body {
        padding: 30px;
    }
</style>