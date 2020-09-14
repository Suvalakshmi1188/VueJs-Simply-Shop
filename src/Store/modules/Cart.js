const state = {
    stocks: []
};

const mutations = {
    ADD_TO_CART (state, {stockId, stockQty}) {
        const record = state.stocks.find( element => element.id == stockId);
        if(record) {
            record.qty += stockQty;
        }
        else {
            state.stocks.push({
                id: stockId,
                qty: stockQty
            });
        }
    },
    REMOVE_FROM_CART (state, {stockId, stockQty}) {
        const record = state.stocks.find( element => element.id == stockId);
        if(record.qty > stockQty) {
            record.qty -= stockQty;
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
    }
};

const actions = {
    removefromcart({commit}, order) {
        commit('REMOVE_FROM_CART', order);
    },
    addstock({commit}, order) {
        commit('ADD_STOCK', order);
    }
};

const getters = {
    stockcart (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                qty: stock.qty,
                name: record.name,
                des: record.des,
                url: record.url
            }
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}