<template>
<div>
  <div class="menufooter">
   <div>
      <ul><img src="../assets/logo-white.png" alt="logo">
        <li class="blanc">Nunc placerat mi id nisi interdm</li>
        <li class="blanc">they mtolis. Praesient is haretra</li>
        <li class="blanc">justo ught scel erisque placer.</li>
      </ul>
    </div>
    <div class="titlefooter"> contact Us
      <ul>
        <li class="bare"><a href="mailto:support@educati.com" class="item">support@educati.com</a></li>
        <li class="bare"><a href="tel:+800567890576 " class="item">+800567890576</a></li>
        <li class="bare">184 Main Collins Street Chicago, United States</li>
      </ul>
    </div>
     <div class="titlefooter"> Quick link
      <ul>
        <li class="bare"><router-link to="/aboutus" class="item">About</router-link></li>
        <li class="bare"><router-link to="/contactus" class="item">Contact</router-link></li>
        <li class="bare"><router-link to="/students" class="item">students</router-link></li>
        <li class="bare"><router-link to="/admission" class="item">Admission</router-link></li>
        <li class="bare"><router-link to="/events" class="item">Events</router-link></li>
        <li class="bare"><router-link to="/latesnews" class="item">Lates News</router-link></li>
      </ul>
    </div>
    <div class="titlefooter">  Newsletter
		<ul> 
		<li class="bare"><p>Subscribe to get update and information.</p></li>
		<li class="bare"><p>Don't worry, we won't send spam!</p></li>
		</ul>
    </div>
  </div>
  <div class="finfoot">
	  <div class="colorfoot">
		  © 2018 Educati. All rights reserved. Dévélopper par Polycarpe MAKOMBO
	  </div>
	</div>
  </div>
</template>

<script>
</script>

<style scoped>
 .menufooter {
    background:#1e2022;
	display: inline-flex;
	width: 1225px;
	margin-top: 50px;
  }
 .titlefooter {
    color: aliceblue;
	display: inline;
	font-family: sans-serif;
	font-size: 18px;
  }
 .bare {
   list-style: none;
   text-align: left;
   margin-bottom: 18px;
  }
  .color {
   list-style: none;
   color: aliceblue;
  }
  .item {
   color: yellow;
   text-decoration: none;
  }
  .blanc {
   color:aliceblue;
   list-style: none;
   margin-bottom: 18px;
  }
   .finfoot {
  background: #0a9dbd;
  padding: 3em 0;
  }
  .colorfoot {
  text-align: center;
  color: aliceblue;
  }
</style>
