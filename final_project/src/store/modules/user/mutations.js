export default {
    buyStock(state, payload){
        state.user.fund -= ( payload.stock.price * payload.qty );

        let targetStock = state.user.ownedStocks.find(stockObj => {
            console.log(stockObj.stock)
            return stockObj.stock.id == payload.stock.id;
        });
        if(targetStock){
            targetStock.qty += payload.qty
        }else{
            state.user.ownedStocks.push({
                stock: payload.stock,
                qty: payload.qty
            });
            //state.user.ownedStocks.forEach(stock => {
            //    console.log(stock)
            //})

        }
    },
    sellStock(state, payload){
        console.log(state.user.ownedStocks)
        let targetStock = state.user.ownedStocks.find(stockObj => {
            return stockObj.stock.id == payload.stock.id;
        });

        targetStock.qty -= payload.qty;

        state.user.ownedStocks = state.user.ownedStocks.filter(stockObj => {
            return stockObj.qty != 0;
        });

        state.user.fund += targetStock.stock.price * payload.qty;
    }
}