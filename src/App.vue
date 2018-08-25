<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <MenuTopbar />
    <router-view/>
    <MenuFooter/>
  </div>
</template>

<script>
import MenuTopbar from './components/MenuTopbar'
import MenuFooter from './components/MenuFooter'
export default {
  name: 'App',
  components: {
    MenuTopbar,
    MenuFooter
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
