import dummyStocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    set_stocks(state, stocks){
        state.stocks = stocks;
    },

    rand_stock(state){
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random()/5 - 0.1))
        })
    }
};

const actions = {
    //buyStock({ commit }, order){
    //    //mutation is in portfolio file
    //},
    initStocks({ commit }){
        commit('set_stocks', dummyStocks);
    },
    randStocks({ commit }){
        commit('rand_stock')
    }
};

const getters = {
    stocks(state){
        return state.stocks
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}