<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link 
              to="/"
              tag="a"
              class="nav-link px-2 text-secondary"
              >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/productos"
              tag="a"
              class="nav-link px-2 text-white"
            >
              Productos
            </router-link>
          </li>
          <li>
            <router-link 
              to="/ordenes"
              tag="a"
              class="nav-link px-2 text-white"
            >
              Ordenes
            </router-link>
          </li>
          <li>
            <router-link 
              to="/orden"
              tag="a"
              class="nav-link px-2 text-white"
            >
              Orden
            </router-link>
          </li>
          <li>
            <router-link 
              to="/inventario"
              tag="a"
              class="nav-link px-2 text-white"
            >
              Inventario
            </router-link>
          </li>
          <li>
            <router-link 
              to="/despachos"
              tag="a"
              class="nav-link px-2 text-white"
            >
              Despachos
            </router-link>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search...">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>

</style>