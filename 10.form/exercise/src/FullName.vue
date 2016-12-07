<template>
    <div>
        <div class="form-group">
            <label for="myfirstname">First Name</label>
            <input
                    type="text"
                    id="myfirstname"
                    class="form-control"
                    :value="firstName"
                    @input="changeName(false, $event)"
            >
            <label for="lastname">Last Name</label>
            <input
                    type="text"
                    id="lastname"
                    class="form-control"
                    :value="lastName"
                    @input="changeName(true, $event)"
            >
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            firstName(){
                return this.value.split(' ')[0];
            },
            lastName(){
                return this.value.split(' ')[1];
            }
        },
        props: ["value"],
        methods: {
            changeName(isLastName, event){
                let fullName = '';
                if(isLastName){
                    console.log('LastName', )
                    fullName = this.firstName + ' '+event.target.value;
                }else{
                    fullName = event.target.value + ' ' + this.lastName;
                }
                this.value = fullName;
                this.$emit('input', fullName)
            }
        }
    }
</script>