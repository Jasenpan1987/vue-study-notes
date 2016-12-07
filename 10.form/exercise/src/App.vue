<template>
    <div class="container">
        <h1 class="text-center text-primary">User Signup Form</h1>
        <hr>
        <template v-if="!isSubmitted">
            <form>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <!-- Exercise 1 -->
                        <!-- Create a Signup Form where you retrieve the following Information -->
                        <!-- Full Name (First Name + Last Name) -->
                        <!-- Mail -->
                        <!-- Password -->
                        <!-- Store Data? Yes/No -->
                        <div class="form-group">
                            <my-full-name v-model="user.fullName"></my-full-name>
                            <p>{{ user.fullName }}</p>
                            <label for="email">User Email</label>
                            <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    v-model="user.email"
                            >
                            <label for="password">User Password</label>
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="user.password"
                            >
                            <hr>

                            <hr>
                            <div class="row">
                                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                                    <label for="storedata">Do you want to store data?</label>
                                    <select
                                            id="storedata"
                                            class="form-control"
                                            v-model="selectedStoreOption"
                                    >
                                        <option v-for="storeOption in storeOptions">{{ storeOption }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Exercise 2 -->
                        <!-- Only display the Form if it has NOT been submitted -->
                        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                        <!-- Exercise 3 -->
                        <!-- Edit the Example from above and create a custom "Full Name" Control -->
                        <!-- which still holds the First Name and Last Name Input Field -->
                        <button class="btn btn-default form-control" @click.prevent="submittedFn">Submit</button>
                    </div>

                </div>
            </form>
        </template>

        <template v-else>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: {{ user.fullName }}</p>
                            <p>Mail: {{ user.email }}</p>
                            <p>Password: {{ user.password }}</p>
                            <p>Store in Database?: {{ selectedStoreOption }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data(){
            return {
                user: {
                    email: '',
                    password: '',
                    fullName: 'Jasen Pan'
                },
                storeOptions: ['Yes', 'No'],
                selectedStoreOption: 'Yes',
                isSubmitted: false
            }
        },
        methods: {
            submittedFn(){
                this.isSubmitted = true;
            }
        },
        components: {
            myFullName: FullName
        }
    }
</script>

<style>
</style>
