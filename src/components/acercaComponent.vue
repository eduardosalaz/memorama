<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="container.fluid text-center">
        <div class="row align-left">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="container">
                    <h1 style="font-size: 72px; line-height: 98px;" >Sobre nosotros</h1>                
                </div>
            </div>
            <div class="col-sm-1">
                <div class="container">
                </div>
            </div>
        </div>
</div>
<div class="container.fluid text-left">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <h1 style="font-size: 100px; line-height: 136px;">Editorial Amalia</h1>
                </div>
            </div>
        </div>
</div>

<div class="container">
        <div class="row">
            <div class="col-sm-4 text-right">
                <div class="container">
                    <img src="../assets/acerca_1.png" alt="">                        
                </div>
            </div>
            <div class="col-sm-8 text-left">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="container">
                    <img src="../assets/acerca_2.png" alt="">                        
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="container">
                            <h1 style="font-size: 24px; line-height: 33px;"><b>Misión</b></h1>                       
                            <p style="font-size: 24px; line-height: 33px;">Exaltar la experiencia de la lectura en todas sus formas, manteniendo el liderazgo como una empresa que acerca la cultura, educación y entretenimiento para el desarrollo humano, por medio de productos, servicios e ideas innovadoras.</p>
                        </div>
                    </div>                   
                </div>
                
                <div class="row">
                    <div class="col-sm-2">
                        <div class="container">
                    <img src="../assets/acerca_3.png" alt="">                        
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <div class="container">
                            <h1 style="font-size: 24px; line-height: 33px;"><b>Visión</b></h1>                       
                            <p style="font-size: 24px; line-height: 33px;">Ser referente en la creación, difusión y distribución de conocimiento e ideas en todas sus formas, siendo proactivos ante las necesidades cambiantes de nuestros clientes y las demandas del mercado, con un enfoque socialmente responsable de calidad y excelencia.</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
</div>



<router-view/>


</template>

<style scoped>



</style>

<script>
export default{
    name: 'aprendeComponent'
}
</script>

