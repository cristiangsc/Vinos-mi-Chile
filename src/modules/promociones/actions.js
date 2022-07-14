export async function fetchPromociones({commit}) {
    try {
        const data = await fetch('/fixtures/promocion.json')
        if (!data.ok) throw ("Error en conexión")
        const promociones = await data.json()
        commit('promociones/setPromociones', promociones.productos, {root: true})
    } catch (error) {
        console.log("error" + error)
    }
}