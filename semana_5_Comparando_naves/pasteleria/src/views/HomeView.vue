<template>
  <div class="home">
    <Header/>
    <Sabores/>
    <Adornos/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Sabores from '../components/Sabores.vue'
import Adornos from '../components/Adornos.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    Sabores,
    Adornos,
    Footer
  }
}
</script>
