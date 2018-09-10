<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <MenuHaut />
    <router-view/>
    <MenuBas/>
  </div>
</template>

<script>
import MenuHaut from './components/MenuHaut'
import MenuBas from './components/MenuBas'
export default {
  name: 'App',
  components: {
    MenuHaut,
    MenuBas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
