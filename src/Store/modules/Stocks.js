import stocks from '../../data/stocks'

const state = {
    stocks: [],
    counter: 0
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'REMOVE_STOCK' (state, {stockId, stockQty}) {
        const record = state.stocks.find( element => element.id == stockId);
        if(record.qty >= stockQty) {
            record.qty -= stockQty;
        }
        state.counter += stockQty;
    },
    'ADD_STOCK' (state, {stockId, stockQty}) {
        const record = state.stocks.find( element => element.id == stockId);
        if(record) {
            record.qty += stockQty;
        }
        state.counter -= stockQty;
    }
};

const actions = {
    addtocart: ({commit}, order) => {
        commit('ADD_TO_CART', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    removestock: ({commit}, order) => {
        commit('REMOVE_STOCK', order);
    } 
};

const getters = {
    stocks: state => {
        return state.stocks;
    },
    counter: state => {
        return state.counter;
    }
};

export default {
    mutations,
    actions,
    state,
    getters
}