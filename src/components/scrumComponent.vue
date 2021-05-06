<template>
 <link rel="stylesheet" href="https://use.typekit.net/ghf3opy.css">


<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/aprende"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-center">
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <h1 style="font-size: 100px; line-height: 136px;">Scrum</h1>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-left" >
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <ul>
                        <li><b>Timeboxing:</b> Es un mecanismo para manejar la complejidad que consiste en poner límites de tiempo a una actividad. </li>

                        <li><b>Historias de Usuario:</b> Lista priorizada de requisitos, o historias, o funcionalidades.</li>

                        <li><b>Velocidad:</b> Es un tipo especial de métrica que se utiliza para estimar la cantidad de trabajo que se puede entregar en un Sprint. </li>

                        <li><b>Story map:</b> Consiste en armar un mapa visual en el cual podamos planificar, organizar y priorizar nuestro backlog del producto. </li>

                        <li><b>Product Owner:</b> La principal responsabilidad en la gestión de riesgos en un proyecto recae sobre él. </li>

                        <li><b>Riesgos:</b> Son las incertidumbres relacionadas a un proyecto que podrían alterar considerablemente el resultado del proyecto de manera positiva o negativa. </li>

                        <li><b>Risk Prompt List:</b> Estas listas se utilizan para estimular el pensamiento respecto a la fuente de donde se pudieran originar los riesgos. </li>

                        <li><b>Miembros del Equipo Scrum:</b> Deben estar dispuestos a aprender de los demás y de quienes tienen más experiencia. </li>

                        <li><b>Stakeholder(s):</b> Es un término colectivo que incluye a clientes, usuarios y patrocinadores que con frecuencia interactúan con el equipo principal de Scrum e influyen en el proyecto durante todo el proceso de desarrollo de productos. </li>

                        <li><b>Puño de cinco (Fist of Five):</b> Es un mecanismo sencillo y rápido que se puede utilizar como práctica de estimación, así como técnica general de formación de consenso colectivo. </li>
                   </ul>
                </div>
            </div>
        </div>
</div>


<router-view/>


</template>

<style scoped>


.ul{
    align-content: left;
    text-align: left;
}

.container{
    margin-bottom: 50px;
}

</style>

<script>
export default{
    name: 'scrumComponent'
}
</script>

