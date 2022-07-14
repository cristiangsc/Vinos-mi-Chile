<template>

  <v-container>

    <v-row class="d-flex justify-lg-space-around">
      <v-col cols="6">
        DATOS DEL COMPRADOR
        <v-form v-model="valid" ref="form">
          <v-text-field v-model="name" :counter="50" label="Nombre" :rules="nameRules" required></v-text-field>
          <v-text-field v-model="email" label="E-mail" :rules="emailRules" required></v-text-field>
          <v-text-field v-model="email" label="Repetir E-mail" :rules="emailRules" required></v-text-field>
          <v-text-field v-model="fono" :counter="10" label="Telefono" :rules="fonoRules" required></v-text-field>
          <v-divider class="my-4"></v-divider>
          Datos del Despacho
          <v-text-field v-model="address" :rules="addressRules" :counter="150" label="Dirección" required>
          </v-text-field>
          <v-text-field v-model="comuna" :counter="50" label="Comuna" :rules="comunaRules" required></v-text-field>
          <v-divider class="my-4"></v-divider>
          Forma de Pagos
          <template>
            <v-container class="px-0" fluid>
              <v-radio-group v-model="radioGroup">
                <v-radio v-for="item in items" :key="item" :label="item" :value="item"></v-radio>
              </v-radio-group>
            </v-container>
          </template>

          <v-btn class="mr-4" @click="submit">
            Confirmar
          </v-btn>
          <v-btn @click="clear">
            Limpiar
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="4">
        <card :showButton="false" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Card from "@/views/Card";
import {mapActions} from "vuex";

export default {
  components: {
    Card,
  },
  data: () => ({
    valid: false,
    radioGroup: 1,
    name: '',
    email: '',
    remail: '',
    fono: '',
    address: '',
    comuna: '',
    items: [
      'Transferencia',
      'Servipag',
      'Webpay',
      'Contra Entrega',
    ],
    nameRules: [
      v => !!v || 'Nombre es requerido',
      v => v.length <= 100 || 'Name must be less than 100 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail es requerido',
      v => /.+@.+/.test(v) || 'E-mail no es válido',
    ],
    addressRules: [
      v => !!v || 'Dirección es requerido',
      v => v.length <= 100 || 'Dirección must be less than 100 characters',
    ],
    comunaRules: [
      v => !!v || 'Comuna es requerida',
      v => v.length <= 100 || 'Comuna must be less than 100 characters',
    ],
    fonoRules: [
      v => !!v || 'Fono es requerido',
      v => v.length <= 10 || 'Telefono must be less than 10 characters',
    ],
  }),

  methods: {
    validate() {
      return this.$refs.form.validate()
    },
    submit() {
      let response = this.$refs.form.validate()
      if (response) {
        this.cleannerCartProduct()
        this.$router.push({name: 'comprobante'})
      }
    },
    ...mapActions('cart',['cleannerCartProduct']),
    clear() {
      this.name = ''
      this.email = ''
      this.remail = ''
      this.fono = ''
      this.address = ''
      this.comuna = ''
    },
  },
}
</script>