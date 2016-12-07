import Vue from 'vue';

export const loadDay = ({ commit }) => {
    Vue.http.get('progress.json')
        .then(response => response.json())
        .then(data => {
            if(data){
                const { stocks, fund, ownedStocks } = data;
                commit('set_stocks', stocks);
                commit('set_portfolio', {
                    fund,
                    ownedStocks
                })
            }
        }).catch(err => {
        console.log(err)
    })
};