<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link to="/" ><a class="navbar-brand">Stock Trade</a></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active">
                        <a> 股票管理 </a>
                    </router-link>

                    <router-link to="/stocks" tag="li" active-class="active">
                        <a> 所有股票 </a>
                    </router-link>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><strong>钱: {{ this.fund | currencyFilter }}</strong></a></li>
                    <li><a style="cursor: pointer;" @click="endDay">结束这一天</a></li>
                    <!--<li><a style="cursor: pointer;">Save Day</a></li>-->
                    <!--<li><a style="cursor: pointer;">Load Day</a></li>-->
                    <li class="dropdown"
                        :class="{'open': isDropDownOpen}"
                        @click="isDropDownOpen = !isDropDownOpen">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                           role="button" aria-haspopup="true" aria-expanded="false">存档 & 读取
                            <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a @click="saveDay" style="cursor: pointer;">存档</a></li>
                            <li><a @click="loadProgress" style="cursor: pointer;">读取</a></li>
                        </ul>
                    </li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        data(){
            return {
                isDropDownOpen: false
            }
        },
        computed: {
            ...mapGetters([
                'fund',
                'stocks',
                'ownedStocks'
            ])
        },
        methods: {
            ...mapActions([
                'randStocks',
                'loadDay'
            ]),
            endDay(){
                this.randStocks()
            },
            saveDay(){
                const dayProgress = {
                    fund: this.fund,
                    ownedStocks: this.ownedStocks,
                    stocks: this.stocks
                }
                this.$http.put('progress.json', dayProgress).then(()=>{
                    console.log('success');
                }).catch(err => {
                    console.log('err', err)
                })
            },
            loadProgress(){
                this.loadDay();
            }
        }
    }
</script>