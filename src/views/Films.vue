<template>
    
  <div class="api">
    <h1 style="margin-top:30px; margin-bottom:15px;">Nos films</h1><br><br>

      <b-card-group class="mx-auto" deck>

        <div 
          class="center"
          v-for="film in films"
          :key="film.id">

            <b-card
  
                :title=film.Title
                :img-src=film.Poster
                :year=film.Year
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                >
                  
                {{film.Year}}

            </b-card>

          </div>

      </b-card-group>

  </div>

</template>

<script>

const axios = require('axios').default;


export default {
  name: 'HomePage',
  props: {
    
  },
  data(){
        return{
            affiche: false,
            films: null
    }

  },
  
  mounted(){
    axios.
    get('http://www.omdbapi.com/?s=batman&apikey=6d322388').
    then(response => (this.films = response.data.Search ))
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  margin-left: 20px;
}
.api{
  width: 100%;
}

.center{
  display: flex;
  justify-content: center;
  color:white;
  
}

.mb-2
{
  background-color: #9c9a9a;
  border: none;
}

</style>