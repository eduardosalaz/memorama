<template>
  <tarjeta/>
  <router-view/>
</template>




<script>
// @ is an alias to /src



import tarjeta from '@/components/tarjeta.vue'

export default 
{
  name: 'Home',
  components: {
    tarjeta
  }
}


</script>
