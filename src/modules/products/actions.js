export async function fetchProducts({commit}) {
    try {
        const data = await fetch('/fixtures/productos.json')
        if (!data.ok) throw ("Error en conexión")
        const products = await data.json()
        commit('products/setProducts', products.productos, {root: true})
    } catch (error) {
        console.log("error" + error)
    }
}