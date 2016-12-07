import Vue from 'vue';
import vuex from 'vuex';

import myStocks from './modules/stocks';
import myPortfolio from './modules/portfolio';
import { loadDay } from './actions';

Vue.use(vuex);

export default new vuex.Store({
    modules: {
        myStocks,
        myPortfolio
    },
    actions: {
        loadDay
    }
});