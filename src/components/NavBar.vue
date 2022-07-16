<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h1><strong>VINOS MI CHILE</strong></h1>
      <v-spacer></v-spacer>
      <v-badge :content="cartCount" class="ma-3 mt-6" :value="cartCount>0" v-if="cartCount >0">
        <v-icon @click="redirectTo('pagar')" :disabled="currentRoute === 'pagar'">mdi-cart</v-icon>
      </v-badge>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="route in routes" :key="route.name" @click="redirectTo(route.name)"
            :disabled="currentRoute === route.name">
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      group: null,
      routes: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          name: 'home'
        },
        {
          icon: 'mdi-bottle-wine-outline',
          title: 'Vinos',
          name: 'products'
        },
        {
          icon: 'mdi-bottle-wine',
          title: 'Promociones de Vinos',
          name: 'promociones'
        },
        {
          icon: 'mdi-glass-cocktail',
          title: 'Accesorios',
          name: 'accesorios'
        },
      ]
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  computed: {
    ...mapGetters('cart',['cartCount']),
    currentRoute() {
      return this.$route.name
    }
  },
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({name: nameRoute})
    }
  },
}
</script>

<style scoped>

</style>