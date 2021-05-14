<template>
    <tablero-component/>
    <div class="container.fluid text-center" style=" height:100px">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/jugar"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>
<div>
<h1 class="titulo"> Encuentra todo los pares pulsando cada una de las cartas para revelar su contenido</h1>
</div>
    <section class="game-boardF">
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
     <h2 style="color:#DFE8FB;">{{status}}</h2>
    <h2> Tu tiempo es: </h2>
    <h3 ref="tiemp">tiempo: {{}}</h3>
    <!--<button @click="restartGame"> restart Game </button> -->
    
</template>

<style>
.titulo{
    font-family: Nunito Sans;
    
}
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
        value:"Picture1",
        visible:false,
        position:0,
        matched:false,
        text:"Timeboxing",
        imgVisible:true
      })
      cardList.value.push({
        value:"Picture1",
        visible:false,
        position:1,
        matched:false,
        text:"Es un mecanismo para manejar la complejidad que consiste en poner límites de tiempo a una actividad. ",
        imgVisible:false      
      })
      cardList.value.push({
        value:"Picture2",
        visible:false,
        position:2,
        matched:false,
        text:"Historias de Usuario",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture2",
        visible:false,
        position:3,
        matched:false,
        text:"Lista priorizada de requisitos, o historias, o funcionalidades.",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture4",
        visible:false,
        position:4,
        matched:false,
        text:"Story map",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture4",
        visible:false,
        position:5,
        matched:false,
        text:"Consiste en armar un mapa visual en el cual podamos planificar, organizar y priorizar nuestro backlog del producto.",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture5",
        visible:false,
        position:6,
        matched:false,
        text:"Product Owner",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture5",
        visible:false,
        position:7,
        matched:false,
        text:"La principal responsabilidad en la gestión de riesgos en un proyecto recae sobre él. ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture3",
        visible:false,
        position:8,
        matched:false,
        text:"Velocidad:",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture3",
        visible:false,
        position:9,
        matched:false,
        text:"Es un tipo especial de métrica que se utiliza para estimar la cantidad de trabajo que se puede entregar en un Sprint. ",
        imgVisible:false 
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
      restartGame,
      remainingPairs
    }
  }
  
}

</script>
