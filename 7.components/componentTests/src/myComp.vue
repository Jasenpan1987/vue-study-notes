<template>
    <div>
        <h4>Hello, {{ name }}</h4>
        <button @click="changename">Change Name</button>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                name: "Jasen Pan"
            }
        },
        methods: {
            changename(){
                this.name = "NiuBi ren"
            }
        }
    }
</script>