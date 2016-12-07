
import Home from './components/Home.vue';

// Normal loading and Lazy loading
//import User from './components/user/User.vue';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    })
};

//import UserStart from './components/user/UserStart.vue';
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    })
};

//import UserDetail from './components/user/UserDetail.vue';
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    })
};

//import UserEdit from './components/user/UserEdit.vue';
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    })
};
/* Lazy loading with group, this will only create one file
instead of all of the above four, and only will only be loaded once*/

/*
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user')
};

//import UserStart from './components/user/UserStart.vue';
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user')
};

//import UserDetail from './components/user/UserDetail.vue';
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user')
};
*/

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart, name: 'userStart' },
        { path: ':id', component: UserDetail, name: 'userDetail' },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    //{ path: '*', redirect: { name: 'home' }},
    { path: '*', redirect: '/'}
];