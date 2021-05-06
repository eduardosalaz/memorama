<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <h1 style="font-size: 100px; line-height: 136px;">¡Has perdido! :(</h1>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-center">
        <div class="row">
                <div class="container">
                    <router-link to = "/"> <button type="button" class="btn btn-primary" style="background-color: #5AB9EA; border-color: #5AB9EA">Volver al menú</button> </router-link>
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

    margin-top: 180px;
    margin-bottom: 110px;
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
    name: 'perdedorComponent'
}
</script>

