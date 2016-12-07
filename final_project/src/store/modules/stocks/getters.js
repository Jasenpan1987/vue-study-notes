export default {
    stocks(state){
        return state.stocks;
    },
    oneStock(state, id){
        return state.stocks.filter((stock) => {
            return stock.id == id;
        });
    }
};