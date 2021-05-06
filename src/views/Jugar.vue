<template>
  <jugar/>
  <router-view/>
</template>


<script>
// @ is an alias to /src

import jugar from '@/components/jugar.vue'

export default 
{
  name: 'Jugar',
  components: {
    jugar
  }
}

</script>
