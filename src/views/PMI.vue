<template>
  <div class="container.fluid text-center" style="height:100px">
        <div class="row">
            <div class="col-sm-1">
                <div class="container" style="margin-left: 30px">
                    <router-link to = "/aprende"> <a href=""><img src="..\assets\flecha.png" alt=""></a>  </router-link>
                </div>
            </div>
        </div>
</div>
  <conceptoPMI/>
</template>


<script>
import conceptoPMI from '../components/conceptoPMI.vue'
// @ is an alias to /src



export default 
{
  name: 'PMI',
  components: {
    conceptoPMI
  }
}
    

</script>
