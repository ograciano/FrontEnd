<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <Contador/>
   <Cuadrado/>
   <Botones/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Contador from '../components/Contador.vue'
import Cuadrado from '../components/Cuadrado.vue'
import Botones from '../components/Botones.vue'
export default {
  name: 'HomeView',
  components: {
    Contador,
    Cuadrado,
    Botones,
  }
  
}
</script>

<style>
  div{
    margin-bottom: 10px;
  }
  .counter{
    font-size: 80px;
  }

  .buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;

  }

  .cuadrado {
    font-size: 25px;
  }
</style>
