<template>
<div>
  <div class="headercolor">
    <a href="mailto:support@educati.com" class="item-header">support@educati.com</a>
    <a href="tel:+8801740411513" class="item-header">+8801740411513</a>
    <router-link to="#" class="item-nav">facebook</router-link>
    <router-link to="#" class="item-nav">Twitter</router-link>
    <router-link to="#" class="item-nav">Vimeo</router-link>
      <router-link to="#" class="item-nav">Linkedin</router-link>
    <router-link to="#" class="item-login">Login</router-link>
    <router-link to="#" class="item-login">Register</router-link>
  </div>
  <div id="menutopbar">
    <div class="logoimg"><img src="../assets/logo-black.png"></div>
    <router-link to="/" class="item-menu">Home</router-link>
    <router-link to="/courses" class="item-menu">Courses</router-link>
    <router-link to="/pages" class="item-menu">Pages</router-link>
    <router-link to="/blog" class="item-menu">Blog</router-link>
    <router-link to="/shop" class="item-menu">Shop</router-link>
    <router-link to="/elements" class="item-menu">Elements</router-link>
  </div>
</div>
</template>

<script>
</script>

<style scoped>
#menutopbar {
background:aliceblue;
justify-content: center;
text-decoration: none;
padding: 4em 0;
}
.logoimg {
  display: inline-flex;
  float: left;
  background: aliceblue;
}
.item-nav {
  display: inline-flex;
  margin-right: 30px;
  color:aliceblue;
  text-decoration: none;
}
.item-menu {
  float:right;
  margin-right: 30px;
  color:black;
  text-decoration: none;
  border-block-end-style: dotted;
}
.headercolor {
  background: #0a9dbd;
  padding: 2em 0;
}
.item-header {
  color:aliceblue;
  float: left;
  margin-right: 30px;
  text-decoration: none;
  border-block-end-style: dotted;
}
.item-login {
  color: aliceblue;
  float: right;
  margin-right: 30px;
  text-decoration: none;
  border-bottom-color:red;
  border-style:solid;
}
</style>
