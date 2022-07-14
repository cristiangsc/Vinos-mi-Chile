export async function fetchAccesorios({commit}) {
    try {
        const data = await fetch('/fixtures/accesorios.json')
        if (!data.ok) throw ("Error en conexión")
        const accesorios = await data.json()
        commit('accesorios/setAccesorios', accesorios.productos, {root: true})
    } catch (error) {
        console.log("error" + error)
    }
}