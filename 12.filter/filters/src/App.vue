<template>
    <div class="container">
        <h1 class="text-center">Filters & Mixins</h1>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h3>Filters</h3>
                <p>{{ text | toUpperCaseLocal | addSmileFaceGlobal}}</p>
                <h3>Computed instead of filter</h3>
                <input type="text" v-model="filterText">
                <br>
                <ul>
                    <li v-for="fruit in filteredFruit">{{ fruit }}</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h3>Mixins</h3>
                    <button class="btn btn-default" @click="loginoutFn">Login/Logout</button>
                    <p>{{ isLoggedIn }}</p>
                </div>
            </div>
            <switch-loginout></switch-loginout>
        </div>
    </div>
</template>

<script>
    import IsLoggedInMixin from './IsLoggedInMixin.js';
    import SwitchLoginout from './SwitchLoginout.vue';

    export default {
        mixins: [IsLoggedInMixin],
        data(){
            return {
                text: 'We got two filter here, global and local filter',
                filterText: '',
                fruits: ['Apple', 'Mango', 'Orange', 'Melon'],
            }
        },
        filters: {
            toUpperCaseLocal(value){
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruit(){
                var filteredFruit = this.fruits.filter(fruit => {
                    return fruit.match(this.filterText)
                });

                return filteredFruit;
            },
        },
        components: {
            switchLoginout: SwitchLoginout
        }
    }
</script>

<style>

</style>
