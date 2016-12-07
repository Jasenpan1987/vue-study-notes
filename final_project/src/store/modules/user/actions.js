export default {
    buyStockAct({ commit }, payload){
        commit('buyStock', payload);
    },
    sellStockAct({ commit }, payload){
        commit('sellStock', payload);
    },
}