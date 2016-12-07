import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        word: 'Hello'
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        tripleCounter(state){
            return state.counter * 3;
        },
        stringCounter(state){
            return state.counter + ' Clicks'
        },
        word(state){
            return state.word;
        }
    },
    mutations: {
        increment(state){
            state.counter ++;
        },
        decrement(state){
            state.counter --;
        },
        incByAmount(state, payload){
            state.counter += payload.amount
        },
        decByAmount(state, payload){
            state.counter -= payload.amount;
        },
        changeWord(state, payload){
            state.word = payload
        }
    },
    actions: {
        incrementAct(context){
            context.commit('increment');
        },
        decrementAct({ commit }){
            commit('decrement');
        },
        asyncIncAct({ commit }, payload){
            setTimeout(() => {
                commit('incByAmount', payload);
            }, 2000)
        },
        asyncDecAct({ commit }, payload){
            setTimeout(() => {
                commit('decByAmount', payload);
            }, 2000)
        },
        changeWordAct({ commit }, payload){
            commit('changeWord', payload)
        }
    }
});