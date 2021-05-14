<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">

<div class="container.fluid text-center" style="height:100px">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>
<div>
<h1 class="titulo"> Selecciona la dificultad</h1>
</div>
<div class="row">
    <div class="container" style="">
        <router-link to = "/tableroFacil"> <button type="button" class="btn btn-primary texto" style="background-color: #5AB9EA; border-color: #5AB9EA">FACIL</button> </router-link>
    </div>
</div>

<div class="row">
    <div class="container" style="">
        <router-link to = "/tableroMedio"> <button type="button" class="btn btn-primary texto" style="background-color: #5680E9; border-color: #5680E9">MEDIO</button> </router-link>
    </div>
</div>

<div class="row">
    <div class="container" style="">
        <router-link to = "/tablero"> <button type="button" class="btn btn-primary texto" style="background-color: #9960D0; border-color: #9960D0">DIFICIL</button> </router-link>
    </div>
</div>

<router-view/>


</template>

<style scoped>
.titulo{
    font-family: Nunito Sans;
    font-size: 100px;
}
.texto{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    
    align-items: center;
    text-align: center;
    color: #FFFFFF;
}
.btn{
    position: relative;
   width: 643px;
    height: 132px; 
    border-radius: 20px;
}



.row{
    background-color: #DFE8FB;
    margin-top: 10px;
    height: 180px;

}
.container{
    /* HEADER */
    position: relative;
    width: 643px;
    height: 132px;

    margin-bottom: 20px;
    border-radius: 20px;
    padding-top: 40px;

}

</style>

<script>
export default{
    name: 'jugarComponent'
}
</script>

