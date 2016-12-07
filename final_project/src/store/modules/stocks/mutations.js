export default {
    changePrice(state, payload){
        //payload: { stockId, newPrice }
        //let targetStock = state.stocks.filter(stock => {
        //    return stock.id == payload.stockId;
        //});
        //targetStock.price = payload.newPrice;
        state.stocks.forEach(stock => {
            stock.price += genRandomNumber();
        });
    }
}

const genRandomNumber = () => {
    //let sign = Math.random() >= 0.5 ? '' : '-';
    let amount = Math.floor(Math.random()*20);
    return Math.random() >= 0.5 ? amount: 0-amount;
};

//console.log(genRandomNumber())
//console.log(genRandomNumber())
//console.log(genRandomNumber())
//console.log(genRandomNumber())