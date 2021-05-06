<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>
<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <h1 style="font-size: 100px; line-height: 136px;">Recursos</h1>
                   <p style="font-size: 60px; line-height: 82px;">Selecciona el área sobre la que quieres aprender</p>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-6">
                <div class="container">
                    <router-link to = "/scrum"> <button type="button" class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA">Scrum</button> </router-link>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="container">
                    <router-link to = "/pmi"> <button type="button" class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA">PMI</button> </router-link>
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
export default{
    name: 'aprendeComponent'
}
</script>

