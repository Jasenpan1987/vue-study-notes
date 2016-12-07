<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-on:click="{fn: myOnClickHandler, arg: 'red'}">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                bgColor: null
            }
        },
        methods: {
            myOnClickHandler(color){
                if(this.bgColor){
                    this.bgColor = null;
                }else{
                    this.bgColor = color;
                }

                this.$el.style.backgroundColor = this.bgColor;
            }

        },
        directives: {
            'my-on': {
                bind(el, binding, vnode){

                    let eventCallback = binding.value.fn.bind(el, binding.value.arg)
                    el.addEventListener(binding.arg, eventCallback)
                }
            }
        }
    }
</script>

<style>
</style>
