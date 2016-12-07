<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-info" @click="submitUser">Submit</button>
                <br><hr><br>
                <input type="text" class="form-control"
                       placeholder="input the resource to fetch"
                       v-model="place"
                >
                <br><br>
                <button class="btn btn-success" @click="fetchUsers">Get Users</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="existUser in existUsers">
                        {{ existUser.username }} - {{ existUser.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    username: '',
                    email: ''
                },
                existUsers: [],
                resource: {},
                place: 'user'
            }
        },
        methods: {
            submitUser(){
                //console.log(this.user.username, this.user.email)
                /*this.$http.post('user.json', this.user)
                        .then(response => {
                            console.log(response)
                        }).catch(err => {
                            console.log(err)
                        })*/
                  this.resource.save({place: this.place}, this.user);
                  this.resource.saveAlt(this.user);
            },
            fetchUsers(){
                /*this.$http.get('user.json')
                        .then(response => {
                            return response.json();
                        })
                        .then(users => {
                            //users is an object
                            //console.log(users)
                            for(let key in users){
                                this.existUsers.push(users[key]);
                            }
                        })*/
                  this.resource.getData({place: this.place})
                        .then(response => {
                            return response.json();
                        })
                        .then(users => {
                            //users is an object
                            //console.log(users)
                            for(let key in users){
                                this.existUsers.push(users[key]);
                            }
                        })
            }
        },
        created(){
            const customActions = {
                saveAlt: {
                    method: "POST",
                    url: "alternative.json"
                },
                getData: {
                    method: "GET"
                }
            }
            this.resource = this.$resource('{place}.json', {}, customActions)
        }
    }
</script>

<style>
</style>
