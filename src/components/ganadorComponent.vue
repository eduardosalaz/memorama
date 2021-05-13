<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <h1 style="font-size: 100px; line-height: 136px;">¡Felicidades!</h1>
                   <h1 style="font-size: 100px; line-height: 136px;">¡Has ganado!</h1>
                   <h2>Tu tiempo</h2>
                   <h2 ref="tiempoo"> </h2>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-6">
                <div class="container">
                    <router-link to = "/"> <button type="button" class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA">Volver al menú</button> </router-link>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="container">
                    <router-link to = "/jugar"> <button type="button" class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA">Volver a jugar</button> </router-link>
                </div>
            </div>
        </div>
</div>



<router-view/>


</template>

<style scoped>


.btn{
    position: relative;
    width: 643px;
    height: 132px;

    margin-bottom: 20px;
    border-radius: 20px;

    font-size: 48px;
    line-height: 65px;
    color: #FFFFFF;
    background: #5AB9EA;
    border-radius: 20px;

}


</style>

<script>
import {ref} from 'vue'

export default{
    name: 'ganadorComponent',
    
    mounted(){
        console.log("ola desde narnia");
        console.log(this.$store.getters.getTiempo);
        const tiempo = ref(this.$store.getters.getTiempo)
        this.$refs.tiempoo.innerText = tiempo.value+" Segundos"

        return {
            tiempo
        }
    },
    setup(){
        console.log("ola desde SETUP");
        
    }
       
}
</script>

