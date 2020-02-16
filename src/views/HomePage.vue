<template>
    <div> 
        <div class="pres01">
            <H2>Qui sommes-nous ? </H2>
            <p id="para">Nous sommes des étudiants au Pôle Léonard de Vinci, en développement web. Notre semaine de VueJs s'est terminé sur la réalisation d'un site internet dont le but était d'utiliser les éléments qui nous ont été enseigné. Nous avons décidé de faire un site qui répertorie une liste de films que vous pouvez aller visiter en cliquant sur "Nos Films".</p>
        </div>

        <div class="pres02">

            <div>
                <img alt="Ridwan" src="./../assets/Ridwan.jpg">
                <h3>Ridwan S.</h3>
                <p>Etudiant de l'IIM</p>
                <p>Passioné par les films d'aventures</p>
            </div>

            <div>
                <img alt="Allan" src="./../assets/Germo.jpg">
                <h3>Allan Germé</h3>
                <p>Etudiant de l'IIM</p>
                <p>Passioné par les films d'actions</p>
            </div>

            <div>
                <img alt="Toshiro" src="./../assets/Tosh.jpg">
                <h3>Toshiro Mpika</h3>
                <p>Etudiant de l'IIM</p>
                <p>Passioné par les films comiques</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Films',
  props: {
    msg: String
  },
  data(){
    return{
    }
  }
}
</script>

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

#para{
    display: flex; 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    width: 50%;
    transform: translateX(370px);
    font-size: 20px;
}

.pres01{
    margin-top: 50px;
}

.pres02{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 60px;
    margin-bottom: 50px;
}
    
</style>

