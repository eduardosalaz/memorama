<template>
    <tablero-component/>
    <section class="game-boardF">
        <Card 
        v-for="(card,index) in cardList"
        :key="`card-${index}`"
        :text="card.text"
        :matched="card.matched"
        :value="card.value"
        :visible="card.visible"
        :position="card.position"
        @select-card="flipCard"
        />
    </section>
    <h2>{{status}}</h2>
    <button @click="restartGame"> restart Game </button>
    
</template>

<style>

.game-boardF {
    display:grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
    grid-template-rows: 200px 200px  ;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
}
</style>
<script>
// @ is an alias to /src
import router from '@/router'
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
  setup(){
    const cardList = ref([])
    const userSelection = ref([])

    const status = computed(() => {
      if(remainingPairs.value ===0) {
        router.push({ path: '/ganador' })
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
