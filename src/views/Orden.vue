<template>
  <div class="container">
    <h1>Orden</h1>
    <label for=""># Orden</label>
    <h1>Cliente</h1>
    <pre>{{ cliente }}</pre>
    <div>
      <label>Nombre: </label><span>{{ ' ' + cliente.nombre }}</span>
    </div>
    <div>
      <label>Rut: </label><span>{{ ' ' + cliente.rut_n + '-' + cliente.rut_dv }}</span>
    </div>
    <h1>Productos</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th>
          <th scope="col">Pedido</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in productos" :key="p.cod_prod">
          <th>{{ p.cod_prod }}</th>
          <th>{{ p.descripcion }}</th>
          <th>{{ p.precio_unit }}</th>
          <th>{{ p.cant_pedido }}</th>
          <th>{{ p.cant_pickeado }}</th>
        </tr>
      </tbody>
    </table>
    <pre></pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Orden',
  components: {
  },
  data () {
    return {
      orden: [],
      cliente: {},
      productos: [],
      mensaje: '',
      api: 'http://localhost:3911'
    }
  },
  created() {
    this.obtener_orden()
  },
  methods: {
    obtener_orden() {
      axios.get(this.api + '/orden')
      .then(
        respuesta => {
          console.log(respuesta)
          this.orden = respuesta.data.orden
          this.cliente = respuesta.data.cliente
          this.productos = respuesta.data.productos
        }
      )
    }
  }
}
</script>