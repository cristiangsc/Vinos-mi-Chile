<template>
  <v-container>
      <h1 class="text-center my-4">Vinos Mi Chile ACCESORIOS</h1>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col sm="12" md="4">
          <card :showButton="true" />
        </v-col>
        <v-col class="pa-5" md="3" sm="12" v-for="accesorio in accesorios" :key="accesorio.id">
          <accesorios-item :accesorio="accesorio" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import AccesoriosItem  from "@/components/AccesoriosItem";
import Card from "@/views/Card";

export default {
  name: "AccesoriosList",
  components:{
    AccesoriosItem,
    Card
  },
  mounted() {
    this.fetchAccesorios()
  },
  methods: {
    ...mapActions('accesorios', ['fetchAccesorios']),
  },
  computed: {
    ...mapState('accesorios', ['accesorios'])
  },
}
</script>

<style scoped>

</style>