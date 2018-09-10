<template>
    <div>
      <div id="elementmenu">
        <router-link to="/" class="cssmenu">ACCUEIL</router-link>
        <router-link to="/myblog" class="cssmenu">NOS BLOG</router-link>
        <img src="../assets/logoblog.png" class="cssmenu" alt="logo du blog">
        <router-link to="/aproposblog" class="cssmenu">A PROPOS</router-link>
        <router-link to="/contactme" class="cssmenu">CONTACTEZ-NOUS</router-link>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
#elementmenu {
  background: yellow;
  padding: 5em 0;
  background-image: url(../assets/bgmainmenu.png);
  }
.cssmenu {
  color:#ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  }
</style>
