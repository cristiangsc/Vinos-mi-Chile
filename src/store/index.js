import Vue from 'vue'
import Vuex from 'vuex'
import products from "@/modules/products";
import cart from "@/modules/cart";
import accesorios from "@/modules/accesorios";
import promociones from "@/modules/promociones";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage:window.localStorage,
  modules:['cart']
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    accesorios,
    promociones,
    cart
  },
  plugins:[vuexLocal.plugin]
})
