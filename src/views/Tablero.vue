<template>
    <tablero-component/>
    <div class="container.fluid text-center" style="height:100px">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/jugar"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>
    <section class="game-boardD">
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
    <!-- <h2>{{status}}</h2> -->
    <h2 style="color:#DFE8FB;">{{status}}</h2>
    <h2> Tu tiempo es: </h2>
    <h3 ref="tiemp">tiempo: {{}}</h3>
    <button @click="restartGame"> restart Game </button>
    
</template>

<style>

.game-boardD {
    display:grid;
    grid-template-columns: 200px 200px 200px 200px 200px 200px ;
    grid-template-rows: 200px 200px 200px 200px 200px 200px;
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
        console.log("e we aqui estoy");
        const contador = ref(0);
        console.log(this.$store.getters.getTiempo);
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
      cardList.value.push({
        value:"Picture6",
        visible:false,
        position:10,
        matched:false,
        text:"Riesgos",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture6",
        visible:false,
        position:6,
        matched:false,
        text:"Son las incertidumbres relacionadas a un proyecto que podrían alterar considerablemente el resultado del proyecto de manera positiva o negativa. ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture7",
        visible:false,
        position:12,
        matched:false,
        text:"Risk Prompt List",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture7",
        visible:false,
        position:13,
        matched:false,
        text:"Estas listas se utilizan para estimular el pensamiento respecto a la fuente de donde se pudieran originar los riesgos.  ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture8",
        visible:false,
        position:14,
        matched:false,
        text:"Miembros del Equipo Scrum",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture8",
        visible:false,
        position:15,
        matched:false,
        text:"Deben estar dispuestos a aprender de los demás y de quienes tienen más experiencia.  ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture9",
        visible:false,
        position:16,
        matched:false,
        text:"Stakeholder(s):",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture9",
        visible:false,
        position:17,
        matched:false,
        text:"Es un término colectivo que incluye a clientes, usuarios y patrocinadores que con frecuencia interactúan con el equipo principal de Scrum e influyen en el proyecto durante todo el proceso de desarrollo de productos.  ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture10",
        visible:false,
        position:18,
        matched:false,
        text:"Puño de cinco (Fist of Five):",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture10",
        visible:false,
        position:19,
        matched:false,
        text:"Es un mecanismo sencillo y rápido que se puede utilizar como práctica de estimación, así como técnica general de formación de consenso colectivo.  ",
        imgVisible:false 
      })
       cardList.value.push({
        value:"Picture11",
        visible:false,
        position:20,
        matched:false,
        text:"Tareas",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture11",
        visible:false,
        position:21,
        matched:false,
        text:"Son no-entregables, o aspectos de los que el Dueño de Producto no se preocupa.  ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture12",
        visible:false,
        position:22,
        matched:false,
        text:"Historias",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture12",
        visible:false,
        position:23,
        matched:false,
        text:"Son entregables de los que el Dueño de Producto se preocupa. ",
        imgVisible:false 
      })
       cardList.value.push({
        value:"Picture13",
        visible:false,
        position:24,
        matched:false,
        text:"Notas",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture13",
        visible:false,
        position:25,
        matched:false,
        text:"Cualquier otra información, clarificación, referencia a otras fuentes de información, etc. Normalmente muy breve.",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture14",
        visible:false,
        position:26,
        matched:false,
        text:"Scrum",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture14",
        visible:false,
        position:27,
        matched:false,
        text:"Proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture15",
        visible:false,
        position:28,
        matched:false,
        text:"Meta del sprint",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture15",
        visible:false,
        position:29,
        matched:false,
        text:"La meta de Sprint debería responder a la pregunta fundamental “¿Por qué hacemos este Sprint en vez de irnos todos de vacaciones? ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture16",
        visible:false,
        position:30,
        matched:false,
        text:"Pila del sprint",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture16",
        visible:false,
        position:31,
        matched:false,
        text:"Representa las historias a las que el equipo se compromete durante este Sprint.  ",
        imgVisible:true 
      })
      
      cardList.value.push({
        value:"Picture17",
        visible:false,
        position:32,
        matched:false,
        text:"Planning poker",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture17",
        visible:false,
        position:33,
        matched:false,
        text:"Técnica para estimar el tiempo de las historias, donde todos los equipos se ven involucrados ",
        imgVisible:false 
      })
      cardList.value.push({
        value:"Picture18",
        visible:false,
        position:34,
        matched:false,
        text:"Umbral de aceptación",
        imgVisible:true 
      })
      cardList.value.push({
        value:"Picture18",
        visible:false,
        position:35,
        matched:false,
        text:"Una clasificación de qué significan los niveles de importancia de la Pila del producto (en términos de contrato)  ",
        imgVisible:false 
      })
      /*
      cardList.value.push({
        value:18,
        visible:false,
        position:36,
        matched:false,
        text:"Scrum master"
      })
      cardList.value.push({
        value:18,
        visible:false,
        position:37,
        matched:false,
        text:"Se asegura de que el framework Scrum se desarrolle correctamente.  "
      })
      */
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
