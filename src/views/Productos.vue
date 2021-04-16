<template>
  <div class="container">
    <button @click="obtener_productos">Buscar</button>
    <h1>Esta es la pagina de productos</h1>
    <div v-for="o in productos" :key="o.id"> 
      <h4>Producto {{ o.id }}, {{ o.name }}</h4>
    </div>
  </div>
</template>

<script>
// import datosOrdenes from '@/datos/ordenes.json'
import axios from 'axios'

export default {
  name: 'Producto',
  components: {

  },
  data() {
    return {
      // ordenes: datosOrdenes.ordenes
      productos: [],
      api: 'http://localhost:3000'
    }
  },
  created() {
    // console.log(datosOrdenes)
    // this.obtener_productos()
  },
  methods: {
    obtener_productos() {
      axios.get(this.api + '/products')
      .then(
        respuesta => {
          console.log(respuesta)
          this.productos = respuesta.data
        }
      )
    }
  }
}
</script>