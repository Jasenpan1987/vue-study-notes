<template>
    <div>
        <p>The other Result is: {{ myDoubleCounter }}</p>
        <p>Number of clicks: {{ myStringCounter }}</p>
        <p>{{ myOwnComputedProperty }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed:{
            ...mapGetters({
                myDoubleCounter: 'doubleCounter',
                myStringCounter: 'stringCounter'
            }),
            myOwnComputedProperty(){
                return 'Hello World!!!'
            }
        }
    }
</script>