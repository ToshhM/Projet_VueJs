<template>
  <div id="app">

      <Header/>
        <img alt="Vue logo" src="./assets/Logo_vuejs.png">
        <h1 style="color: rgb(10,126,131); font-weight:bold;">IIM Streaming</h1>
        <router-view/> <!-- Permet de faire le rendu des composants au-dessus : https://router.vuejs.org/fr/api/#event-->
      <Footer/>

  </div>
</template>


<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import Footer from'./components/Footer.vue'
import Header from'./components/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color:#9c9a9a;
}

</style>

