import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/Stocks'
import cart from './modules/Cart'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        cart
    }
}
);