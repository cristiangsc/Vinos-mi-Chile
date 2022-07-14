<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <h1 class="text-center primary--text mb-5">Productos Agregados</h1>
        <v-alert v-if="counter === 0" border="left" prominent shaped color="light-blue" type="info"
        >No hay productos agregados al Carrito
        </v-alert
        >
        <v-data-table
            v-else
            :headers="headers"
            :items="cartProducts"
            sort-by="title"
            class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>

              <v-spacer></v-spacer>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                  >¿Quieres borrar el producto?
                  </v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancelar
                    </v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Si
                    </v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="addStock(item)">
              mdi-plus-circle
            </v-icon>
            <v-icon small class="mr-2" @click="removeStock(item)">
              mdi-minus-circle
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete</v-icon>
          </template>
        </v-data-table>
        <div class="mt-2">
          <v-row>
            <v-list-item>
              Sub Total: <span>${{ Number(cartTotal).toLocaleString('es-CL') }}</span>
            </v-list-item>
            <v-list-item>
              Descuento:<span class="red--text">${{ Number(cartTotalDescuento).toLocaleString('es-CL') }}</span>
            </v-list-item>
            <v-list-item>
              Total:<span class="font-weight-black"  >$ {{ Math.round(Number(cartTotal) - Number(cartTotalDescuento)).toLocaleString('es-CL') }}</span>
            </v-list-item>
            <v-btn v-if="counter > 0 && showButton == true"
                depressed
                color="primary"
                block
                @click="redirectTo('pagar')"
            >
              Pagar
            </v-btn>
          </v-row>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
  props:{
    showButton:{
      type:Boolean,
    }
  },
  data: function () {
    return {
      dialogDelete: false,
      headers: [

        {
          text: 'ID:Producto',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {text: 'Producto', value: 'product'},
        {text: 'Cantidad', value: 'count'},
        {text: 'Precio', value: 'price'},
        {text: 'SubTotal', value: 'total'},
        {text: 'Acciones', value: 'actions', sortable: false},
      ],
      deleteId: null,
    }
  },
  computed: {
    ...mapGetters('cart', ['cartProducts', 'cartTotal', 'cartTotalDescuento']),
    counter() {
      return this.cartProducts.length
    },
  },
  methods: {
    ...mapActions('cart', ['addStockCartProduct', 'removeCartProduct', 'removeStockCartProduct']),
    addStock(item) {
      console.log(item)
      this.addStockCartProduct(item.id)
    },
    removeStock(item) {
      this.removeStockCartProduct(item.id)
    },
    deleteItem(item) {
      this.deleteId = item.id
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.removeCartProduct(this.deleteId)
      this.closeDelete()
    },
    closeDelete() {
      this.dialogDelete = false
    },
    redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
      },
  },
}
</script>

<style scoped>

</style>