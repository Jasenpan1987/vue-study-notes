export default ({
    data(){
        return {
            loginout: true
        }
    },
    methods: {
        loginoutFn(){
            this.loginout = !this.loginout;
        }
    },
    computed: {
        isLoggedIn(){
            return this.loginout ? 'User already signin' : 'Not signin yet';
        }
    },
});