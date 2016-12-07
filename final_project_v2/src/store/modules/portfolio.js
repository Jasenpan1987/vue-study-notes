const state = {
    fund: 10000,
    ownedStocks: []
};

const mutations = {
    buy_stock(state, { id, price, qty }){
        const record = state.ownedStocks.find(stock => {
            return stock.id == id;
        });
        if(record){//the stock i want to buy has already been in my ownedStocks array
            record.qty += qty
        }else{
            state.ownedStocks.push({
                id,
                qty
            });
            state.fund -= price * qty;
        }
    },

    sell_stock(state, { id, price, qty }){
        const record = state.ownedStocks.find(stock => {
            return stock.id == id;
        });
        if(record.qty > qty){
            record.qty -= qty;
        }else{
            state.ownedStocks.splice(state.ownedStocks.indexOf(record), 1);
        }
        state.fund += price * record.qty;
    },
    set_portfolio(state, { fund, ownedStocks }){
        state.fund = fund;
        state.ownedStocks = ownedStocks || [];
    }
};

const actions = {
    buyStock({ commit }, order){
        commit('buy_stock', order);
    },
    sellStock({ commit }, order){
        commit('sell_stock', order);
    }
};

const getters = {
    ownedStocks(state, getters){
        console.log(getters)
        return state.ownedStocks.map(ownedStock => {
            const record = getters.stocks.find(stock => {
                return stock.id == ownedStock.id;
            });
            return {
                id: record.id,
                price: record.price,
                name: record.name,
                qty: ownedStock.qty
            }
        })
    },
    fund(state){
        return state.fund;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}