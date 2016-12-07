import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import word from './modules/word';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: [counter, word]
});