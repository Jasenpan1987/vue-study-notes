<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <p>{{ text | reverseText | wordCount}}</p>
                <!-- Build a local Filter which reverses the Text it is applied on -->

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | reverseText | wordCount}}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ reversedText }}</p>
                <p>{{ addWordCount }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ text | addSmileFace }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import { addSmileFaceMixin } from './AddSmileFaceMixin.js'
    export default {
        mixins: [addSmileFaceMixin],
        data(){
            return {
                text: "Hello World!!"
            }
        },
        computed: {
            reversedText(){
                return this.text.split("").reverse().join("");
            },
            addWordCount(){
                return this.text + ` (${this.text.length})`
            }
        },
        filters:{
            reverseText(value){
                return value.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
