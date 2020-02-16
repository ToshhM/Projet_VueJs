//Les routeurs permettent de changer de page sans rénitialiser le code 
//On doit éviter de faire des lien "href"
import Vue from 'vue'
import Router from 'vue-router' // Importation aprés avoir été télécharger via le terminal-->

import HomePage from './../views/HomePage.vue'
import Films from './../views/Films.vue' // importation des view

Vue.use(Router)

export default new Router({
    routes: [
        { 
            path: '/',
            component: HomePage
        },
        { 
            path: '/films',
            component: Films 
        },//path est l'url de la page
    ]
})