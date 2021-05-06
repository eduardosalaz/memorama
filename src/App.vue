<template>
<div class="app">
  <appnavbar :name="$route.name"/>
</div>

  
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
 

  
</template>

<style>
#app {
  font-family: Nunito Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #DFE8FB;
}

#nav {
  padding: 0px;
}


/* #nav a {
    color: #FFFFFF;
}  

#a {
    color: #FFFFFF;
}   */

/* #nav a.router-link-exact-active {
} */



</style>
<script>
// @ is an alias to /src



import appnavbar from '@/components/appNavBar1.vue'




export default 
{
  name: 'App',
  components: {
    appnavbar,
    
  },

}


</script>
