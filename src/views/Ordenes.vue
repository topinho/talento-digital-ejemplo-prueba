<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cliente</th>
          <th scope="col">Monto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Fecha</th>
          <th scope="col">Avance Preparacion</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="o in ordenes" :key="o.num_orden">
          <th>{{ o.num_orden }}</th>
          <th>{{ o.cliente }}</th>
          <th>{{ o.monto }}</th>
          <th>{{ o.cant_productos }}</th>
          <th>{{ o.fecha_entrega }}</th>
          <th>{{ o.avance_preparacion }}</th>
          <th>{{ o.estado }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Ordenes',
  components: {
  },
  data () {
    return {
      ordenes: [],
      mensaje: '',
      api: 'http://localhost:3911'
    }
  },
  created() {
    this.obtener_ordenes()
  },
  methods: {
    obtener_ordenes() {
      axios.get(this.api + '/ordenes')
      .then(
        respuesta => {
          console.log(respuesta)
          this.ordenes = respuesta.data
        }
      )
    }
  }
}
</script>