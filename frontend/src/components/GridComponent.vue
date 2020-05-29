<template>
    <div class="grid">
        <div :style="style">
            <span v-for="(n, x) in units">
                <span v-for="(m, y) in units">
                    
                    <span class="grid-unit" :style="unitStyle(x, y)">
                        <small>{{ x }}.{{ y }}</small>
                        <br>
                        <small>{{ transform(x) }}.{{ transform(y) }}</small>
                    </span>
                    
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component
  export default class GridComponent extends Vue {
    
    
    get style() {
        // if (this.$store.getters.isWidgetBeingDragged) {
        //     return 'display: block;'
        // } else {
        //     return 'display: none;'
        // }
        
        return 'display: block;'
    }
    
    get units() {
        return this.$store.getters.config.units
    }
    
    get screenUnit() { 
        return window.innerWidth/this.units
    }
    
    transform(x: number) {
        return Math.round(x*this.screenUnit)
    }
    

    

    
    unitStyle(x: number, y: number) {
      return 'width: '  + this.screenUnit + 'px;' +
             'height: ' + this.screenUnit + 'px;' +
             'left: '   + x*this.screenUnit + 'px;' +
             'top: '    + y*this.screenUnit + 'px;'
    }
    
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .grid-unit {
      display: block;
      position: absolute;
      border-right: 1px dashed white;
      border-bottom: 1px dashed white;
  }

</style>
