const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    tripleCounter(state){
        return state.counter * 3;
    },
    stringCounter(state){
        return state.counter + ' Clicks'
    }
};

const mutations = {
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
    }
};

const actions = {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}