<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="row">
    <div class="container" style="background: #5AB9EA;">
        <router-link to = "/jugar"> <a class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA"> <h1>FACIL</h1> </a> </router-link>
    </div>
</div>

<div class="row">
    <div class="container" style="background: #5680E9;">
        <router-link to = "/aprende"> <a class="btn btn-primary" style="background-color: #5680E9; border-color: #5680E9"> <h1>MEDIO</h1> </a> </router-link>
    </div>
</div>

<div class="row">
    <div class="container" style="background: #9960D0;">
        <router-link to = "/acerca"> <a class="btn btn-primary" style="background-color: #9960D0; border-color: #9960D0"> <h1>DIFICIL</h1> </a> </router-link>
    </div>
</div>

<router-view/>


</template>

<style scoped>

.a{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;

    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
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
