<template>
  <Header/>
  <TablaPedidos/>
  <h2>Cantidad de ingredientes en stock</h2>
  <br>
  <Ingredientes/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import TablaPedidos from '../components/TablaPedidos.vue'
import Footer from '../components/Footer.vue'
import Ingredientes from '../components/Ingredientes.vue'


export default {
  name: 'Pedido',
  components: {
    Header,
    TablaPedidos,
    Footer,
    Ingredientes
  }
}
</script>
