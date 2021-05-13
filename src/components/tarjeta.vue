<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="row">
    <div class="container" style="">
        <router-link to = "/jugar"> <button type="button" class="btn btn-primary texto" style="background-color: #5AB9EA; border-color: #5AB9EA">JUGAR</button> </router-link>
    </div>
</div>

<div class="row">
    <div class="container" style="">
        <router-link to = "/aprende"> <button type="button" class="btn btn-primary texto" style="background-color: #5680E9; border-color: #5680E9">APRENDE</button> </router-link>
    </div>
</div>

<div class="row">
    
    <div class="container" style="">
        <router-link to = "/acerca"> <button type="button" class="btn btn-primary texto" style="background-color: #9960D0; border-color: #9960D0">ACERCA DE</button> </router-link>
       <!-- <router-link to = "/acerca"> <a class="btn btn-primary" style="background-color: #9960D0; border-color: #9960D0"> <h1>ACERCA DE</h1> </a> </router-link>-->
    </div>
    
</div>

<router-view/>

</template>

<style scoped>

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
