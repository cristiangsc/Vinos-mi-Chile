<template>
<div>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        height="100%"
        :src="slide.imagen"
    >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
      >
        <div class="text-h2">
          {{ slide.titulo }} Slide
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <vinos-home-list/>
</div>
</template>
<script>


import VinosHomeList from "@/components/VinosHomeList";

export default {
  name: 'Home',
  components: {
    VinosHomeList
  },
  data() {
    return {
      slides: [],
    }
  },
  created() {
    this.fetchBanner()
  },
  methods: {
    async fetchBanner() {
      try {
        const data = await fetch('/fixtures/home.json')
        if (!data.ok) throw ("Error en conexión")
        const home = await data.json()
        this.slides = home.mejoresvinos
        } catch (error) {
        console.log("error" + error)
      }
    }
  },
}
</script>
