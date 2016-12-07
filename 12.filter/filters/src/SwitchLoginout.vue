<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h3>Mixins</h3>
            <button class="btn btn-default" @click="loginoutFn">Login/Logout</button>
            <p>{{ isLoggedIn }}</p>
        </div>
    </div>
</template>
<script>
    import IsLoggedInMixin from './IsLoggedInMixin.js';

    export default {
        mixins: [IsLoggedInMixin]
    }
</script>