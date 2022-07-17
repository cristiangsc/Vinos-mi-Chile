<template>
  <v-card class="mx-auto my-12" max-width="374">

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
  </v-card>
</template>

<script>

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
}
</script>

<style scoped></style>
