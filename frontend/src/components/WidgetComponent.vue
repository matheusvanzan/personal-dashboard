<template>
  <div class="widget-wrapper" 
        :style="style">
        
        <div class="widget"
             :id="id"
             @dragstart="widgetDragstart"
             @dragend="widgetDragend"
             @drag="widgetDrag"
             draggable>
            
            <h6 v-if="widget.name" class="name">{{ widget.name }}</h6>
            
            <template v-if="widget.type == 'datetime'">
                <datetime-widget-component :id="widget.id" />
            </template>
            
            <template v-if="widget.type == 'webhook'">
                <webhook-widget-component :id="widget.id" />
            </template>
            
            <template v-if="widget.type == 'myfitnesspal'">
                <myfitnesspal-widget-component :id="widget.id" />
            </template>
            
            <!--<small>{{ style }}</small>-->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import DatetimeWidgetComponent from './DatetimeWidgetComponent.vue';
import WebhookWidgetComponent from './WebhookWidgetComponent.vue';
import IframeWidgetComponent from './IframeWidgetComponent.vue';
import MyfitnesspalWidgetComponent from './MyfitnesspalWidgetComponent.vue';

@Component({
    components: {
        DatetimeWidgetComponent,
        WebhookWidgetComponent,
        IframeWidgetComponent,
        MyfitnesspalWidgetComponent
    },
})
export default class WidgetComponent extends Vue {
    
    @Prop() private id!: number;
    
    get widget() {
        return this.$store.getters.widgetById(this.id)
    }
    
    get screenUnit() { 
        return window.innerWidth/this.$store.getters.config.units
    }
    
    startOffsetX = 0
    startOffsetY = 0
    
    newLeft = 0
    newTop = 0
    
    get style() {
      return 'width: '  + this.widget.width * this.screenUnit + 'px;' +
             'height: ' + this.widget.height * this.screenUnit + 'px;' +
             'left: '   + this.widget.left * this.screenUnit + 'px;' +
             'top: '    + this.widget.top * this.screenUnit + 'px;'
    }
    
    mounted() {
        
    }
    
    widgetDragstart(e: any) {
        //   console.log('dragstart', e)
        // this.$store.dispatch('DRAG_WIDGET_START_ACTION')
        
        this.startOffsetX = e.offsetX
        this.startOffsetY = e.offsetY
        
        var img = new Image();
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
        e.dataTransfer.setDragImage(img, 0, 0)
    }
    
    widgetDragend(e: any) {
        //   console.log('dragend', e)
        // this.$store.dispatch('DRAG_WIDGET_STOP_ACTION')
        
        // let travelX = e.offsetX - this.startOffsetX
        // let travelY = e.offsetY - this.startOffsetY
        
        // let newLeft = Math.floor(travelX/this.screenUnit) + parseInt(this.widget.left)
        // let newTop = Math.floor(travelY/this.screenUnit) + parseInt(this.widget.top)
        
        // console.log('new', newLeft, newTop)
        
        // this.$store.dispatch('MOVE_WIDGET_ACTION', {
        //   id: this.id,
        //   left: this.newLeft,
        //   top: this.newTop
        // })
    }
    
    widgetDrag(e: any) {
        // console.log('drag', e)
        
        let travelX = e.offsetX - this.startOffsetX
        let travelY = e.offsetY - this.startOffsetY
        
        if (travelX >= this.screenUnit || travelY >= this.screenUnit) {
            
            let left = Math.floor(travelX/this.screenUnit) + parseInt(this.widget.left)
            let top = Math.floor(travelY/this.screenUnit) + parseInt(this.widget.top)
            
            console.log('left', left, 'top', top)
            console.log('newLeft', this.newLeft, 'newTop', this.newTop)
            
            if (left >= 0 && top >= 0) {
                // if (left != this.newLeft || top != this.newTop) {
                
                    this.$store.dispatch('MOVE_WIDGET_ACTION', {
                      id: this.id,
                      left: left,
                      top: top
                    })
                    
                    // this.newLeft = left
                    // this.newTop = top
                    
                    // this.widget.left = left
                    // this.widget.top = top
                // }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    html, body {
        background-color: var(--gray) !important;
    }

    .content {
        /*background-color: gray;    */
    }
    
    .name {
        text-align: center;
        /*border-bottom: 1px solid white;*/
        padding-bottom: 10px;
    }
    
    .widget-wrapper {
        position: absolute;
        /*border: 1px solid green;*/
    }
    
    .widget {
        background-color: #343a40;
        color: white;
        /*border: 1px solid white;*/
        /*border-radius: 10px;*/
        padding: 10px;
        margin: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        
        -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);
        -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);
        box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.4);
    }
    
    
    
</style>
