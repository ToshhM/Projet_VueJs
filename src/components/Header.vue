<template>
    
     <div >
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">IIM Streaming</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item ><router-link to="/"  id="link">Accueil</router-link></b-nav-item>
            <b-nav-item ><router-link to="/films"  id="link">Nos Films</router-link></b-nav-item>
            <!-- Activer la navigation utilisateur dans une app où le routeur est activé-->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
        
 
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>


#link:visited{
    color: #615f5f ;
}

#link:hover{
  color: whitesmoke;
  text-decoration: none;
}


    
</style>