<template>
  <v-container>
    <h1 class="text-center my-4">Vinos Mi Chile</h1>
    <v-divider></v-divider>
    <v-row justify="center">
      <v-col sm="12" md="4">
        <card :showButton="true" />
      </v-col>
      <v-col class="pa-5" md="3" sm="12" v-for="product in products" :key="product.id">
        <product-item :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions, mapMutations, mapState} from 'vuex'
import ProductItem from "@/components/ProductItem";
import Card from "@/views/Card";

export default {
  name: "ProductList",
  components:{
    ProductItem,
    Card
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
  },
  computed: {
    ...mapState('products', ['products'])
  },
}
</script>

<style scoped>

</style>