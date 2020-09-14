import stocks from './components/Stock/Stocks'
import Cart from './components/Cart/Cart'

export const routes = [
    { path: '/', name: 'stock', component: stocks },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/*', redirect: '/'}
];