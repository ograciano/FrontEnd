<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedido">Pedido</router-link> |
    <router-link to="/admin">Administrador</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  margin: 0 10px;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
