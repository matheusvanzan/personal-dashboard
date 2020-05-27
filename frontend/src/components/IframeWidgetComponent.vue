<template>
  <div class="widget-content">
    <b-row>
      <b-col>
        <iframe :src="url" width="800" height="600" frameborder="0"></iframe>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class IframeWidgetComponent extends Vue {
  
  @Prop() private id!: number;
    
    get widget() {
        return this.$store.getters.widgetById(this.id)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
