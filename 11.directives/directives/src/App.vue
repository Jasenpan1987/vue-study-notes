<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build In Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some HTML</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delay="'green'">Global Custom Directive</p>
                <p v-local-highlight:background.delay.blink="{firstColor: 'yellow', secondColor: 'grey', delay: 2000, interval: 1000}">
                    Local Custom Directive</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode){
                //el.style.backgroundColor = 'red'
                //el.style.backgroundColor = binding.value;
                let delay = 0;
                if(binding.modifiers['delay']){
                  delay = binding.value.delay;
                }
                if(binding.modifiers['blink']){
                    let firstColor = binding.value.firstColor||'red',
                        secondColor = binding.value.secondColor||'orange',
                        interval = binding.value.interval||2000;
                    let currentColor = firstColor;

                    setTimeout(()=>{
                        setInterval(()=>{
                            currentColor==firstColor ? currentColor=secondColor : currentColor=firstColor;
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = currentColor;
                              }else{
                                el.style.color = currentColor;
                              }
                        }, interval)
                    }, delay)
                }
              }
            }
        }
    }
</script>

<style>

</style>
