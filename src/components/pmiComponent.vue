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
                   <h1 style="font-size: 100px; line-height: 136px;">PMI</h1>
                </div>
            </div>
        </div>
</div>

<div class="container.fluid text-left" >
        <div class="row">
            <div class="col-sm-12">
                <div class="container">
                   <ul>
                        <li><b>Tareas:</b> Son no-entregables, o aspectos de los que el Dueño de Producto no se preocupa. </li>

                        <li><b>Historias:</b> Son entregables de los que el Dueño de Producto se preocupa.</li>

                        <li><b>Notas:</b> Cualquier otra información, clarificación, referencia a otras fuentes de información, etc. Normalmente muy breve. </li>

                        <li><b>Scrum:</b> Proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente </li>

                        <li><b>Meta del sprint:</b> La meta de Sprint debería responder a la pregunta fundamental “¿Por qué hacemos este Sprint en vez de irnos todos de vacaciones? </li>

                        <li><b>Pila del sprint:</b> Representa las historias a las que el equipo se compromete durante este Sprint. </li>

                        <li><b>Planning poker:</b> Técnica para estimar el tiempo de las historias, donde todos los equipos se ven involucrados </li>

                        <li><b>Umbral de aceptación:</b> Una clasificación de qué significan los niveles de importancia de la Pila del producto (en términos de contrato) </li>

                        <li><b>Scrum master:</b> Se asegura de que el framework Scrum se desarrolle correctamente. </li>
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
    name: 'pmiComponent'
}
</script>

