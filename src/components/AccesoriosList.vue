<template>
  <v-container>
    <h1 class="text-center my-4">Vinos Mi Chile ACCESORIOS</h1>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-col sm="12" md="8"  xl="5">
        <card :showButton="true" />
      </v-col>
      <v-col class="pa-5" md="4" sm="12" v-for="accesorio in paginatedData" :key="accesorio.id">
        <accesorios-item :accesorio="accesorio" />
      </v-col>
    </v-row>
      <v-pagination v-show="accesorios.length" v-model="page" :length="pages"></v-pagination>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AccesoriosItem from "@/components/AccesoriosItem";
import Card from "@/views/Card";

export default {
  name: "AccesoriosList",
  components: {
    AccesoriosItem,
    Card,
  },
  data() {
    return {
      rowsPerPage: 5,
      page: 1,
    }
  },
  mounted() {
    this.fetchAccesorios();
  },
  methods: {
    ...mapActions("accesorios", ["fetchAccesorios"]),
  },
  computed: {
    ...mapState("accesorios", ["accesorios"]),
    pages() {
      return this.rowsPerPage ? Math.ceil(this.accesorios.length / this.rowsPerPage): 0;
    },
    paginatedData() {
      return this.accesorios.slice(this.page * this.rowsPerPage - this.rowsPerPage, this.page * this.rowsPerPage);
    },
  },
};
</script>

<style scoped></style>
