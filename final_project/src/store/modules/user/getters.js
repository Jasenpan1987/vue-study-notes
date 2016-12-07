export default {
    fund(state){
        return state.user.fund
    },
    ownedStocks(state){
        return state.user.ownedStocks
    },
    user(state){
        //console.log(state.user)
        return state.user
    }
};