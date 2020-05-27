<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark" fill="true">
      
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-button class="" >Show grid</b-button>
          <b-button class="" >Teste</b-button>
  
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component
  export default class Navbar extends Vue {
    
    
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  #navbar {
    margin: 0;
  }

</style>
