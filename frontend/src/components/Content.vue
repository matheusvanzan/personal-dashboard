<template>
  <div class="content-wrapper">
      <div class="content">
          
         <grid-component />
            
        <span v-for="widget in widgets" :key="widget.id">
          <widget-component :id="widget.id" />
        </span>
            
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GridComponent from './GridComponent.vue'
import WidgetComponent from './WidgetComponent.vue'

import Widget from '../models/Widget'

// Components
@Component({
    components: {
        GridComponent,
        WidgetComponent
    },
})
export default class Content extends Vue {


    get widgets() {
        return this.$store.getters.widgets
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    body {
        font-size: 1vw !important;
    }
    
    .content-wrapper {
        position: relative;
    }
</style>
