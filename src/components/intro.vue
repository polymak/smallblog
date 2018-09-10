<template>
    <div>
        <div class="bgwelcome">
            <h1>Bienvenu dans notre Mini-Blog Profesionnel</h1>
            <h2>Vous trouverez les différents informations par rapport au développement des Applications Informatiques</h2>
        </div>
      <div class="zonecours">
            <h1>Les articles de nos Cours</h1>
        <ul class="removeline">
            <li><router-link to="/coursweb"  class="removeline" >Cours Web</router-link></li>
            <li><router-link to="/coursandroid"  class="removeline" >Cours Android</router-link></li>
            <li><router-link to="/coursdatabase"  class="removeline" >Cours Data Base</router-link></li>
        </ul>
      </div>
      <div class="zonelinks">
            <h1>Nos Liens Externes Utiles</h1>
        <ul class="removeline">
            <li><a href="#" class="removeline">GitHub</a></li>
            <li><a href="#" class="removeline">VueJs</a></li>
            <li><a href="#" class="removeline">OpenClassRoom</a></li>
            <li><a href="#" class="removeline">Wordpress</a></li>
            <li><a href="#" class="removeline">Android Studio</a></li>
            <li><a href="#" class="removeline">BaseData</a></li>
        </ul>
      </div>
      <div class="compagny">
          <h1>Notre Compagnie</h1>
        <ul class="removeline">
          <li><router-link to="/mission"  class="removeline" >Mission</router-link></li>
          <li><router-link to="/carriere"  class="removeline" >Carrière</router-link></li>
          <li><router-link to="/job"  class="removeline" >Job</router-link></li>
        </ul>
      </div>
      <div class="contactandabout">
          <h1>Nous Contacter et Qui nous sommes</h1>
        <ul class="removeline">
          <li><router-link to="/contactme"  class="removeline" >Contactez-nous</router-link></li>
          <li><router-link to="/aproposblog"  class="removeline" >A propos de nous</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
.bgwelcome {
    background: #49BF4C;
    padding: 5em 0;
}
h2,h1,h3 {
    color:#ffffff;
}
.zonecours {
    color:#ffffff;
    background: #002633;
    padding: 5em 0;
}
.zonelinks {
    color:#ffffff;
    background: #9c2b2b;
    padding: 5em 0;
}
.removeline {
    list-style: none;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
}
.compagny {
    color:#ffffff;
    background:#11833a;
    padding: 5em 0;
}
.contactandabout {
    color:#ffffff;
    background:turquoise;
    padding: 5em 0;
}
</style>
