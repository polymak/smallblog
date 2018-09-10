<template>
  <div id="footerall">
      <div class="space">
        <ul id="footerlistnone">
          <h2 class="titrefooter">COMPAGNY</h2>
          <li><router-link to="/mission"  class="listsupport" >Mission</router-link></li>
          <li><router-link to="/carriere"  class="listsupport" >Carrière</router-link></li>
          <li><router-link to="/job"  class="listsupport" >Job</router-link></li>
        </ul>
      </div>
      <div class="space">
        <ul id="footerlistnone">
          <h2 class="titrefooter">SUPPORT</h2>
          <li><router-link to="/coursweb"  class="listsupport" >Cours Web</router-link></li>
          <li><router-link to="/coursandroid"  class="listsupport" >Cours Android</router-link></li>
          <li><router-link to="/coursdatabase"  class="listsupport" >Cours Data Base</router-link></li>
        </ul>
      </div>
      <div class="space">
        <ul id="footerlistnone">
          <h2 class="titrefooter">LIENS EXTERNES</h2>
          <li><a href="#"  target="blank" class="listsupport">GitHub</a></li>
          <li><a href="#"  target="blank" class="listsupport">VueJs</a></li>
          <li><a href="#"  target="blank" class="listsupport">OpenClassRoom</a></li>
          <li><a href="#"  target="blank" class="listsupport">Wordpress</a></li>
          <li><a href="#"  target="blank" class="listsupport">Android Studio</a></li>
          <li><a href="#"  target="blank" class="listsupport">BaseData</a></li>
        </ul>
      </div>
      <div class="space">
        <ul id="footerlistnone">
          <h2 class="titrefooter">NOS PARTENAIRES</h2>
          <li><img src="../assets/partnaire1.jpg" alt=""></li>
          <li><img src="../assets/partnaire2.jpg" alt=""></li>
          <li><img src="../assets/partnaire3.jpg" alt=""></li>
        </ul>
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
#footerall {
  background-image: url(../assets/backgroundfooter.jpg);
  display: flex;
  }
#footerlistnone {
  list-style: none;
  text-align: left;
  }
.listsupport {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: yellow;
  }
  .titrefooter {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #ffffff;
  }
  a {
    text-decoration: none;
  }
  .space {
    margin-right: 80px;
    margin-left: 50px;
  }
</style>
