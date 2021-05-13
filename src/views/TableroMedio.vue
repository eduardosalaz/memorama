<template>
    <tablero-component/>
    <section class="game-boardM">
        <Card 
        v-for="(card,index) in cardList"
        :key="`card-${index}`"
        :text="card.text"
        :matched="card.matched"
        :value="card.value"
        :visible="card.visible"
        :position="card.position"
        :imgVisible="card.imgVisible"
        @select-card="flipCard"
        />
    </section>
    <!-- <h2>{{status}}</h2>-->
    <h2> Tu tiempo es: </h2>
    <h3 ref="tiemp">tiempo: {{}}</h3>
    <button @click="restartGame"> restart Game </button>
    
</template>

<style>

.game-boardM {
    display:grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
    grid-template-rows: 200px 200px 200px 200px ;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
}
</style>
<script>
// @ is an alias to /src
import _ from 'lodash'
import {computed,ref,watch} from 'vue'
import tableroComponent from '@/components/tableroComponent.vue'
import Card from '@/components/Card.vue'
export default 
{
  name: 'Tablero',
  components: {
    tableroComponent,
    Card
  },
  mounted(){
        console.log("ola");
        const contador = ref(0);
        
        console.log(this.$store.getters.getTiempo);
        console.log("ola");
        var c = this;
        setInterval(function(){
          contador.value = contador.value + 1
           console.log(contador.value);
          c.$refs.tiemp.innerText = contador.value +" Segundos"
          c.$store.commit('addTiempo',contador.value)
          
         },1000);
  } ,      
  setup(){
    const cardList = ref([])
    const userSelection = ref([])

    const status = computed(() => {
      if(remainingPairs.value ===0) {
        this.$router.push('/Ganador')
        return 'player wins!'
      } else {
        return `Remaining Pairs: ${remainingPairs.value}`
      }
    })
    
    const remainingPairs = computed(() => {
      const remainingCards = cardList.value.filter(
        card => card.matched === false
        ).length

        return remainingCards / 2
    })

    const shuffleCards = () => {
      cardList.value = _.shuffle(cardList.value)
    }
    const restartGame = () => {
      shuffleCards()

      cardList.value = cardList.value.map((card,index) => {
        return{
          ...card,
          matched:false,
          position:index,
          visible:false

        }
      })
    }

    
      cardList.value.push({
        value:0,
        visible:false,
        position:0,
        matched:false,
        text:"Timeboxing"
      })
      cardList.value.push({
        value:0,
        visible:false,
        position:1,
        matched:false,
        text:"Es un mecanismo para manejar la complejidad que consiste en poner límites de tiempo a una actividad. "
      })
      cardList.value.push({
        value:1,
        visible:false,
        position:2,
        matched:false,
        text:"Historias de Usuario"
      })
      cardList.value.push({
        value:1,
        visible:false,
        position:3,
        matched:false,
        text:"Lista priorizada de requisitos, o historias, o funcionalidades."
      })
      cardList.value.push({
        value:2,
        visible:false,
        position:4,
        matched:false,
        text:"Story map"
      })
      cardList.value.push({
        value:2,
        visible:false,
        position:5,
        matched:false,
        text:"Consiste en armar un mapa visual en el cual podamos planificar, organizar y priorizar nuestro backlog del producto."
      })
      cardList.value.push({
        value:3,
        visible:false,
        position:6,
        matched:false,
        text:"Product Owner"
      })
      cardList.value.push({
        value:3,
        visible:false,
        position:7,
        matched:false,
        text:"La principal responsabilidad en la gestión de riesgos en un proyecto recae sobre él. "
      })
      cardList.value.push({
        value:4,
        visible:false,
        position:8,
        matched:false,
        text:"Velocidad:"
      })
      cardList.value.push({
        value:4,
        visible:false,
        position:9,
        matched:false,
        text:"Es un tipo especial de métrica que se utiliza para estimar la cantidad de trabajo que se puede entregar en un Sprint. "
      })
      cardList.value.push({
        value:5,
        visible:false,
        position:10,
        matched:false,
        text:"Riesgos"
      })
      cardList.value.push({
        value:5,
        visible:false,
        position:6,
        matched:false,
        text:"Son las incertidumbres relacionadas a un proyecto que podrían alterar considerablemente el resultado del proyecto de manera positiva o negativa. "
      })
      cardList.value.push({
        value:6,
        visible:false,
        position:12,
        matched:false,
        text:"Risk Prompt List"
      })
      cardList.value.push({
        value:6,
        visible:false,
        position:13,
        matched:false,
        text:"Estas listas se utilizan para estimular el pensamiento respecto a la fuente de donde se pudieran originar los riesgos.  "
      })
      cardList.value.push({
        value:7,
        visible:false,
        position:14,
        matched:false,
        text:"Miembros del Equipo Scrum"
      })
      cardList.value.push({
        value:7,
        visible:false,
        position:15,
        matched:false,
        text:"Deben estar dispuestos a aprender de los demás y de quienes tienen más experiencia.  "
      })
      cardList.value.push({
        value:8,
        visible:false,
        position:16,
        matched:false,
        text:"Stakeholder(s):"
      })
      cardList.value.push({
        value:8,
        visible:false,
        position:17,
        matched:false,
        text:"Es un término colectivo que incluye a clientes, usuarios y patrocinadores que con frecuencia interactúan con el equipo principal de Scrum e influyen en el proyecto durante todo el proceso de desarrollo de productos.  "
      })
      cardList.value.push({
        value:9,
        visible:false,
        position:18,
        matched:false,
        text:"Puño de cinco (Fist of Five):"
      })
      cardList.value.push({
        value:9,
        visible:false,
        position:19,
        matched:false,
        text:"Es un mecanismo sencillo y rápido que se puede utilizar como práctica de estimación, así como técnica general de formación de consenso colectivo.  "
      })

    cardList.value = _.shuffle(cardList.value)
    cardList.value = cardList.value.map((card,index) => {
        return{
          ...card,
          matched:false,
          position:index,
          visible:false

        }
      })

    const flipCard = (payload) =>{
      cardList.value[payload.position].visible = true

      if(userSelection.value[0]){
        if(userSelection.value[0].position === payload.position && userSelection.value[0].faceValue === payload.faceValue){
          return
        }
        userSelection.value[1] = payload
      }else{
        userSelection.value[0] = payload
      }
    }

    watch(
      userSelection,
      (currentValue)=> {
        if (currentValue.length === 2){
          const cardOne = currentValue[0]
          const cardTwo = currentValue[1]

          if(cardOne.faceValue === cardTwo.faceValue){
              
              cardList.value[cardOne.position].matched=true
              cardList.value[cardTwo.position].matched=true
          } else {
            setTimeout(()=> {
              cardList.value[cardOne.position].visible = false
              cardList.value[cardTwo.position].visible = false
            },2000)
            
          }

          

          userSelection.value.length = 0
        }
    },{deep:true})

    return{
      cardList,
      flipCard,
      userSelection,
      status,
      shuffleCards,
      restartGame
    }
  }
  
}

</script>
