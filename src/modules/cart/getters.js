export function cartProducts(state) {
    return state.cart.map((product) => {
        let myProd = product
        myProd.total = product.count * product.price
        return myProd
    })
}

export function cartTotal(state, getters) {
    return getters.cartProducts.reduce((total, product) => {
        return total + product.total
    }, 0)
}

export function cartCount(state) {
    return state.cart.length
}

export function cartTotalDescuento(state, getters) {
    let subtotal = Math.round(getters.cartTotal)
    let descuento = 0
    if (subtotal < 100000) {
        return descuento = Math.round(subtotal * 0.05)
    } else {
        return descuento = Math.round(subtotal * 0.11)
    }
}

export function cartDescuento(state, getters) {
    let subtotal = Math.round(getters.cartTotal)
    let descuento = ''
    if (subtotal < 100000) {
        return descuento = '5%'
    } else {
        return descuento = '11%'
    }
}