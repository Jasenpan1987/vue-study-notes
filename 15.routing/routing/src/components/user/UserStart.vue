<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link
                    :to="{ name: 'userDetail', params: {id: '1'}}"
                    tag="li"
                    class="list-group-item">
                <a>User 1</a>
            </router-link>

            <router-link
                    to="/user/2"
                    tag="li"
                    class="list-group-item">
                <a>User 2</a>
            </router-link>

            <router-link
                    to="/user/3"
                    tag="li"
                    class="list-group-item">
                <a>User 3</a>
            </router-link>
        </ul>
    </div>
</template>