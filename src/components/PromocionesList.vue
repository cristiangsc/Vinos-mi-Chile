<template>
     <v-container>
      <h1 class="text-center my-4">Vinos Mi Chile PROMOCIONES</h1>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col sm="12" md="4">
          <card :showButton="true" />
        </v-col>
        <v-col class="pa-5" md="3" sm="12" v-for="promocion in promociones" :key="promocion.id">
          <promociones-item :promocion="promocion" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import PromocionesItem from "@/components/PromocionesItem";
import Card from "@/views/Card";

export default {
  name: "PromocionesList",
  components:{
    PromocionesItem,
    Card
  },
  mounted() {
    this.fetchPromociones()
  },
  methods: {
    ...mapActions('promociones', ['fetchPromociones']),
  },
  computed: {
    ...mapState('promociones', ['promociones'])
  },
}
</script>

<style scoped>

</style>