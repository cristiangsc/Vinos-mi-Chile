export function addProductCart({commit},product){
    commit('ADD_PRO_TO_CART',product)
}

export function addStockCartProduct({commit},idProduct){
    commit('ADD_STOCK_PRODUCT_CART',idProduct)
}
export function removeStockCartProduct({commit},idProduct){
    commit('REMOVE_STOCK_PRODUCT_CART',idProduct)
}

export function removeCartProduct({commit},idProduct){
    commit('REMOVE_PRODUCT_CART',idProduct)
}

export function cleannerCartProduct({commit}){
    commit('CLEANNER_PRODUCT_CART')
}
