import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import stocks from './modules/stocks'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        savedState: ''
    },
    actions: {
        saveDayAct({ commit }){
            commit('saveDay')
        },
        loadDayAct({ commit }){
            commit('loadDay')
        }
    },
    mutations: {
        saveDay(state){

            const savedUser = JSON.stringify(state.user);
            const savedStocks = JSON.stringify(state.stocks);
            state.savedState = {
                user: savedUser,
                stocks: savedStocks
            }
            console.log(state.user)
        },
        loadDay(state){
            console.log(state.user)
            state.user = JSON.parse(state.savedState.user);
            state.stocks = JSON.parse(state.savedState.stocks);
            console.log(state.user)

        }
    },
    modules: {
        user,
        stocks
    }
});