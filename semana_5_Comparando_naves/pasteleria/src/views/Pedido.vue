<template>
  <Header/>
  <FormPedido/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import FormPedido from '../components/FormPedido.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Pedido',
  components: {
    Header,
    FormPedido,
    Footer
  }
}
</script>
