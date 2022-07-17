<template>
  <v-card class="mx-auto my-5"  max-width="374">

    <v-img height="250" width="250" class="mx-auto" :src="promocion.imagen"></v-img>

    <v-card-title class="justify-center">{{ promocion.nombre }}</v-card-title>
    <v-card-text>
      {{ promocion.descripcion }}
    </v-card-text>
    <v-card-text>
      <div class="font-weight-normal">
        <strong>-{{ promocion.caracteristicas[0] }}</strong>
      </div>
      <div class="font-weight-normal">
        <strong>-{{ promocion.caracteristicas[1] }}</strong>
      </div>
      <div class="font-weight-normal">
        <strong>-{{ promocion.caracteristicas[2] }}</strong>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div class="my-4 text-subtitle-1">Antes: ${{  Number(promocion.precio_normal).toLocaleString('es-CL') }}</div>
          <div class="my-4 text-subtitle-1 red--text font-weight-bold">Ahora ${{  Number(promocion.precio_promo).toLocaleString('es-CL') }}</div>
        </v-card-text>
    <v-spacer></v-spacer>


    <v-card-actions>
      <v-btn color="primary darken-2" block @click="add">
        <v-icon>mdi-cart</v-icon>
        Agregar
      </v-btn>
    </v-card-actions>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" color="blue">
      {{ promocion.title }} Agregado al carrito
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
    promocion: {
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
        id: this.promocion.id,
        imagen: this.promocion.imagen,
        product: this.promocion.nombre,
        price: this.promocion.precio_promo,
        count: 1,
      }
      this.addProductCart(prod)
      this.snackbar = true
    },
  },
}
</script>

<style scoped></style>
