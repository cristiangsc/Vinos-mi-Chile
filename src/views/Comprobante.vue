<template>
  <v-card class="mx-auto mt-5" max-width="344">
    <v-card-text>
      <div>Confirmación</div>
      <p class="text-h4 text--primary">
        la Orden Nº {{numOrden()}} ha sido confirmada y ya la estamos preparando!
      </p>

    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary accent-4" @click="redirectTo('home')">
        Ir al Home
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>

export default {
  name: "Comprobante",
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({name: nameRoute})
    },
    numOrden(){
      return Math.floor(Math.random() * 1000)
    }
  },
}
</script>

<style scoped>

</style>