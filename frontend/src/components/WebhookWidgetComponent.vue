<template>
    <div class="widget-content">
        <b-row>
            <b-col>
                <b-button v-for="url in widget.data.urls" :key="url.name"
                          @click="btnClick(url.path)"
                          variant="outline-primary"
                          block >
                    {{ url.name }}
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class WebhookWidgetComponent extends Vue {
    
    @Prop() private id!: number;
    
    get widget() {
        return this.$store.getters.widgetById(this.id)
    }
    
    btnClick(path: string) {
        console.log(path)
        
        let xmlHttp = new XMLHttpRequest();
        // xmlHttp.onreadystatechange = function() { 
        //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        //         console.log(xmlHttp.responseText);
        // }
        xmlHttp.open('GET', path, true)
        xmlHttp.send(null)
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    button {
        color: white;
        border-color: white;
    }
    
    button:hover {
        color: #343a40;
        background-color: white;
        border-color: white;
    }
</style>
