<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span><slot name="subtitle">This is the default subtitle</slot></span>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>
<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }
</style>