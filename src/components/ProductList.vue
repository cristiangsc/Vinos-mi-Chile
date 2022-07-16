<template>
  <v-container>
    <h1 class="text-center my-4">Vinos Mi Chile</h1>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-col sm="12" md="8"  xl="5" >
        <card :showButton="true" />
      </v-col>
      <v-col class="pa-5" md="4" sm="12"  v-for="product in paginatedData" :key="product.id">
        <product-item :product="product" />
      </v-col>
    </v-row>
    <v-pagination v-show="products.length" v-model="page" :length="pages"></v-pagination>
  </v-container>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import ProductItem from "@/components/ProductItem";
import Card from "@/views/Card";

export default {
  name: "ProductList",
  components:{
    ProductItem,
    Card
  },
  data(){
    return {
      rowsPerPage: 5,
      page: 1
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
  },
  computed: {
    ...mapState('products', ['products']),
    pages() {
      return this.rowsPerPage ? Math.ceil(this.products.length / this.rowsPerPage) : 0
    },
    paginatedData() {
      return this.products.slice((this.page * this.rowsPerPage) - this.rowsPerPage, (this.page * this.rowsPerPage));
    }
  },
}
</script>

<style scoped>

</style>