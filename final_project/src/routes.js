import Home from './components/Home.vue';

import Portfolio from './components/portfolio/Portfolio.vue';
//import Portfolio from './components/portfolio/Stock.vue';

import Stocks from './components/stocks/Stocks.vue';
//import Stocks_StockList from './components/stocks/StockList.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio, name: 'portfolio'},
    { path: '/stocks', component: Stocks, name: 'stocks'}
];