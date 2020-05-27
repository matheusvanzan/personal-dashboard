<template>
    <div class="widget-content">
        <span class="time">{{ time }}</span>
        <br>
        <span class="weekday">{{ weekday }}</span>
        <br>
        <span class="date">{{ date }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DatetimeWidgetComponent extends Vue {
    
    @Prop() private id!: number;
    
    get widget() {
        return this.$store.getters.widgetById(this.id)
    }
  
  weekday = ''
  date = ''
  time = ''
  
  mounted () {
    this.update()
    setInterval(this.update, 1000)
  }
  
  update() {
    var cd = new Date()
    var week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    this.weekday = week[cd.getDay()]
    this.date =  this.zeroPadding(cd.getDate(), 2) + '/' + this.zeroPadding(cd.getMonth()+1, 2) + '/' + this.zeroPadding(cd.getFullYear(), 4)
    this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
  }
  
  zeroPadding(num: any, digit: any) {
    var zero = ''
    for (var i = 0; i < digit; i++) {
        zero += '0'
    }
    return (zero + num).slice(-digit)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .widget-content {
        text-align: center;
    }
</style>
