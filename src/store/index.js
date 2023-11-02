import { createStore } from 'vuex'
import { productList } from '@/constans/product_list'

export default createStore({
    state() {
        return {
            dollarRate: 38,
            title: 'Список товарів',
            productList,
            currencyList: [
                {
                    id: 1,
                    name: 'Гривня',
                },
                {
                    id: 2,
                    name: 'Доллар',
                },
            ],
            selectedCurrency: 'Гривня',
            cartList: [],
            message: null,
        }
    },
    getters: {
        getTitle: (state) => state.title,
        productList: ({ productList }) => productList,
        currencyList: ({ currencyList }) => currencyList,
        dollarRate: ({ dollarRate }) => dollarRate,
        selectedCurrency: (state) => state.selectedCurrency,
        message: (state) => state.message,
        cartList: ({ cartList }) => cartList,
        getTotalPrice: (state) => {
            let result = state.cartList.reduce((prevVal, prod) => prevVal + prod.price, 0)
				console.log(result)
            if (state.selectedCurrency === 'Доллар') {
					state.productList.currency = '$'
				}
            else state.productList.currency = 'грн'
            return result
        },
    },

    mutations: {
        chooseProduct(state, { product, index }) {
            state.cartList.push(product)
            state.productList.splice(index, 1)
        },
        chooseCurrency(state, currency) {
            state.selectedCurrency = currency
        },
        changePrice(state) {

            state.productList.forEach((product) => {
                if (state.selectedCurrency === 'Доллар') {
                    product.price = parseFloat((product.price / state.dollarRate).toFixed(2))
                    product.currency = '$'
                } else if (state.selectedCurrency === 'Гривня') {
                    product.price = Math.floor(state.dollarRate * product.price)
                    product.currency = 'грн'
                }
            })
				 state.cartList.forEach((product) => {
                     if (state.selectedCurrency === 'Доллар') {
                         product.price = parseFloat((product.price / state.dollarRate).toFixed(2))
                         product.currency = '$'
                     } else if (state.selectedCurrency === 'Гривня') {
                         product.price = Math.floor(state.dollarRate * product.price)
                         product.currency = 'грн'
                     }
                 })
        },
        deleteProductFromCart(state, { product, index }) {
            state.productList.push(product)
            state.cartList.splice(index, 1)
        },
    },
    actions: {
        chooseProduct({ commit }, { product, index }) {
            commit('chooseProduct', { product, index })
        },
        chooseCurrency({ commit }, currency) {
            commit('chooseCurrency', currency)
        },
        changeCurrency({ commit }) {
            commit('changePrice')
        },
        deleteProductFromCart({ commit }, { product, index }) {
            commit('deleteProductFromCart', { product, index })
        },
    },
})
