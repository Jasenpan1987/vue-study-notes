import Vue from 'vue';
import router from 'vue-router';

import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/stocks', component: Stocks },
    { path: '/portfolio', component: Portfolio }
];