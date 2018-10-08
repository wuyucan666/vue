<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  ul,li{list-style: none;}
  a{text-decoration: none;}
  #app{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: rgba(78, 77, 77, 0.6);
    position: relative;
  }
</style>
