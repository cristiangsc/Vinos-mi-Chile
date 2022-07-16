<template>
     <v-container>
      <h1 class="text-center my-4">Vinos Mi Chile PROMOCIONES</h1>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col sm="12" md="8"  xl="5">
          <card :showButton="true" />
        </v-col>
        <v-col class="pa-5" md="4" sm="12" v-for="promocion in paginatedData" :key="promocion.id">
          <promociones-item :promocion="promocion" />
        </v-col>
      </v-row>
        <v-pagination v-show="promociones.length" v-model="page" :length="pages"></v-pagination>
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
  data() {
    return {
      rowsPerPage: 5,
      page: 1,
    }
  },
  mounted() {
    this.fetchPromociones()
  },
  methods: {
    ...mapActions('promociones', ['fetchPromociones']),
  },
  computed: {
    ...mapState('promociones', ['promociones']),
    pages() {
      return this.rowsPerPage ? Math.ceil(this.promociones.length / this.rowsPerPage) : 0
    },
    paginatedData() {
      return this.promociones.slice((this.page * this.rowsPerPage) - this.rowsPerPage, (this.page * this.rowsPerPage));
    }
  },
}
</script>

<style scoped>

</style>