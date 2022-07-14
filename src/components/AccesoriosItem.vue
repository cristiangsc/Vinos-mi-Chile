<template>
  <v-card class="mx-auto my-12" max-width="374">

    <v-img height="250" :src="accesorio.imagen"></v-img>

    <v-card-title>{{ accesorio.nombre }}</v-card-title>
    <v-card-text>
      {{ accesorio.descripcion }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div class="my-4 text-subtitle-1">Antes: ${{ accesorio.precio_normal }}</div>
          <div class="my-4 text-subtitle-1">Ahora ${{ accesorio.precio_promo }}</div>
        </v-card-text>
    <v-spacer></v-spacer>


    <v-card-actions>
      <v-btn color="primary darken-2" block @click="add">
        <v-icon>mdi-cart</v-icon>
        Agregar
      </v-btn>
    </v-card-actions>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" color="blue">
      {{ accesorio.title }} Agregado al carrito
      <v-icon>mdi-cart-plus</v-icon>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    accesorio: {
      type: Object,
      require: true,
    },
  },
  data: function () {
    return {
      show: false,
      snackbar: false,
      multiLine: true,
    }
  },
  methods: {
    ...mapActions('cart', ['addProductCart']),
    add() {
      let prod = {
        id: this.accesorio.id,
        imagen: this.accesorio.imagen,
        product: this.accesorio.nombre,
        price: this.accesorio.precio_promo,
        count: 1,
      }
      this.addProductCart(prod)
      this.snackbar = true
    },
  },
}
</script>

<style scoped></style>
