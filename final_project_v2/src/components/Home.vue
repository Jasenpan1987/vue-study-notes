<template>
    <div>
        <h1 class="text-center text-success">主页</h1>
        <h2>说明</h2>
        <h3>点击“结束一天”来进行下一天</h3>
        <h3>点击“存档/读取”来进行存档或读档</h3>
        <h3>每一天，每支股票都会涨或者跌，请用手中资金赚最多的钱</h3>
        <br><hr><br>
        <h2>目前持有现金 {{ fund | currencyFilter }}</h2>
    </div>
</template>

<script>
    export default {
        computed: {
            fund(){
                return this.$store.getters.fund;
            }
        }
    }
</script>