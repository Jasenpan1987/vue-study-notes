<template>
    <li>
        Server {{machine.id}} => {{machine.status}}
    </li>
</template>

<script>
    export default {
        data: function(){
            return {}
        },
        props: ['machine'],
        mounted(){
            console.log(this.$parent)
        }
    }
</script>