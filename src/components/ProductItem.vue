<template>
  <v-card class="mx-auto my-5" max-width="374">

    <v-img height="250" width="250" class="mx-auto" :src="product.imagen"></v-img>

    <v-card-title class="justify-center">{{ product.nombre }}</v-card-title>
    <v-card-text>
      {{ product.descripcion }}
    </v-card-text>
    <v-card-text>
      <div class="font-weight-normal">
        <strong>-{{ product.caracteristicas[0] }}</strong>
      </div>
      <div class="font-weight-normal">
        <strong>-{{ product.caracteristicas[1] }}</strong>
      </div>
      <div class="font-weight-normal">
        <strong>-{{ product.caracteristicas[2] }}</strong>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div class="my-4 text-subtitle-1">Antes: ${{ Number(product.precio_normal).toLocaleString('es-CL') }}</div>
          <div class="my-4 text-subtitle-1 red--text font-weight-bold">Ahora ${{ Number(product.precio_promo).toLocaleString('es-CL') }}</div>
        </v-card-text>
    <v-spacer></v-spacer>


    <v-card-actions>
      <v-btn color="primary darken-2" block @click="add">
        <v-icon>mdi-cart</v-icon>
        Agregar
      </v-btn>
    </v-card-actions>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" color="blue">
      {{ product.title }} Agregado al carrito
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
    product: {
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
        id: this.product.id,
        imagen: this.product.imagen,
        product: this.product.nombre,
        price: this.product.precio_promo,
        count: 1,
      }
      this.addProductCart(prod)
      this.snackbar = true
    },
  },
}
</script>

<style scoped></style>
