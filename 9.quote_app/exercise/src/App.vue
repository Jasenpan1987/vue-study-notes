<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent='appBlue'">
                    Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent='appGreen'">
                    Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent='appRed'">Load Red Template</button>
                <p>{{selectedComponent}}</p>
                <hr>
                <component :is="selectedComponent">
                    <p>Some Common Stuff</p>
                </component>
                <!--<app-blue>-->
                    <!--<h4>This is the Blue slot</h4>-->
                <!--</app-blue>-->
                <!--<app-green>-->
                    <!--<h4>This is green</h4>-->
                <!--</app-green>-->
                <!--<app-red>-->
                    <!--<h4>This is Red!</h4>-->
                <!--</app-red>-->


            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return {
                selectedComponent: "appBlue"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
