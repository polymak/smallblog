<template>
    <div class="bgblog">
        <div>
            <h1 class="TitreCat">Voici les différentes catégories de nos articles pour les tutoriels</h1>
        </div>
        <div class="photos">
          <img src="../assets/category1.jpg" alt="Catégorie 1">
          <h2>Les Articles du Cours Web </h2>
          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>PHP</li>
            <li>VueJs</li>
            <li>Wordpress</li>
            <li>Prestashop</li>
            <li><router-link to="/coursweb"  class="a" >Cliquer ici pour voir tous les cours</router-link></li>
          </ul>
        </div>
        <div class="photos">
          <img src="../assets/category2.jpg" alt="Catégorie 2">
          <h2>Les Articles du Cours Android </h2>
          <ul>
            <li>Android Studio</li>
            <li>Mit App Inventor</li>
            <li>lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li><router-link to="/coursandroid"  class="a" >Cliquer ici pour voir tous les cours</router-link></li>
          </ul>
        </div>
        <div class="photos">
          <img src="../assets/category3.jpg" alt="Catégorie 3">
          <h2>Les Articles du Cours DataBase </h2>
          <ul>
            <li>Windev</li>
            <li>Access</li>
            <li>Oracle</li>
            <li>lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li><router-link to="/coursdatabase"  class="a" >Cliquer ici pour voir tous les cours</router-link></li>
          </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.bgblog {
    background: url(../assets/bgblog.jpg);
}
.TitreCat {
    color:#ffffff;
    background:#106960;
}
.photos {
  box-sizing: border-box;
  display: inline-block;
  margin-top: 1.875rem;
  border-style: solid;
  border-block-end-color: springgreen;
  border-radius: 5px;
  margin-bottom:50px;
  margin-inline-end: 40px;
  color: aliceblue;
}
ul, li {
  list-style: none;
  text-align: left;
}
a {
  text-align: left;
  color: yellow;
}
</style>
