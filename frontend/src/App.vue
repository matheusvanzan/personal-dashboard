<template>
  <div id="app">
    <Navbar />
    <br>
    <Content />
  </div>
</template>

<script lang="ts">

  // Default componets
  import { Component, Vue } from 'vue-property-decorator';
  
  // My components
  import Navbar from './components/Navbar.vue';
  import Content from './components/Content.vue';
  
  // Bootstrap
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  
  // Bootstrap css
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  
  // Components
  @Component({
    components: {
      Navbar,
      Content
    },
  })
  export default class App extends Vue {
    
    mounted() {
        this.$store.dispatch('FETCH_CONFIG_ACTION')
        this.$store.dispatch('FETCH_WIDGETS_ACTION')
    }
    
  }
</script>

<style lang="scss">
#app {
  
}
</style>
