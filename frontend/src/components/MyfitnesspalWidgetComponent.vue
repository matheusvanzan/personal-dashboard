<template>
    <div class="widget-content">
        <b-row>
            <b-col v-for="macro in widget.data.macros" :key="macro.name">
                <div class="circle">
                    <div class="circle-inner">
                        <span class="value">{{ macro.value }}</span>
                        <br>
                        <small><span class="unit">{{ macro.units }}</span></small>
                    </div>
                </div>
            
                <div class="label">{{ macro.name }}</div>
            </b-col>
            
        </b-row>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyfitnesspalWidgetComponent extends Vue {
    
    @Prop() private id!: number;
    
    get widget() {
        return this.$store.getters.widgetById(this.id)
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .widget-content {
        text-align: center;
        --size: 4rem;
        --margin: 0.5rem;
    }

    .circle {
        border: 1px solid white;
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        
        margin-left: auto;
        margin-right: auto;
        
        margin-top: var(--margin);
        margin-bottom: var(--margin);
        
        /*padding-top: 50%;*/
    }
    
    .circle-inner {
        /*margin-top: calc(50% - 0.5rem);*/
    }
    
    .circle-inner .value {
        /*display: block;*/
        margin-top: 10px;
        margin-bottom: -10px;
    }
    
    .circle-inner .units {
        /*font-size: 0.5rem;*/
    }

</style>
