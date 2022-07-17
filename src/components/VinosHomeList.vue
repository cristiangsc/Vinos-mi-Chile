<template>
  <div>
    <h1 class="text-center mt-5">Nuestros Mejores Vinos</h1>
    <v-container>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-col sm="12">
        </v-col>
        <v-col class="pa-5" md="4" sm="12" v-for="item in filterProduct" :key="item.id">
          <vinos-item :product="item" />
        </v-col>
      </v-row>
    </v-container>
 </div>

</template>

<script>

import {mapActions, mapState} from 'vuex'
import VinosItem from "@/components/VinosItem";


export default {
  name: "VinosHomeList",
  components:{
    VinosItem,
    },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
  },
  computed: {
    ...mapState('products', ['products']),
    filterProduct(){
      return this.products.filter((item, index) => index < 3)
    }
  },
}
</script>

<style scoped>

</style>