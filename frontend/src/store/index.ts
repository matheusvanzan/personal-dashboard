import Vue from 'vue'
import Vuex from 'vuex'

import Config from '../models/Config'
import Widget from '../models/Widget'

import ConfigService from '../services/ConfigService'
import WidgetService from '../services/WidgetService'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		config: new Config({}),
		widgets: new Array<Widget>(),
		isWidgetBeingDragged: false
	},
	mutations: {
		// CONFIG
		FETCH_CONFIG_MUTATION(state, config: Config) {
			state.config = config
		},
		
		// WIDGETS
		FETCH_WIDGETS_MUTATION(state, widgets: Array<Widget>) {
			state.widgets = widgets
		},
		
		// ADD_WIDGET(state, widget: Widget) {
		// 	state.widgets.push(widget)
		// }
		
		DRAG_WIDGET_START_MUTATION(state) {
			state.isWidgetBeingDragged = true
		},
		
		DRAG_WIDGET_STOP_MUTATION(state) {
			state.isWidgetBeingDragged = false
		},
		
		MOVE_WIDGET_MUTATION(state: any, data: any) {
			state.widgets.forEach((w: Widget) => {
				if (w.id.toString() === data.id.toString()) {
					console.log('MOVE_WIDGET_MUTATION', data.left, data.top)
					w.left = data.left
					w.top = data.top
				}
			})
		},
	},
	actions: {
		// CONFIG
		async FETCH_CONFIG_ACTION(context) {
			let config = await ConfigService.getConfig()
			context.commit('FETCH_CONFIG_MUTATION', config)
		},
		
		// WIDGETS
		async FETCH_WIDGETS_ACTION(context) {
			let widgets = await WidgetService.getAll()
			context.commit('FETCH_WIDGETS_MUTATION', widgets)
		},
		
		// async ADD_WIDGET(context: any, nome: string, descricao: string, lat: number, lng: number) {
		// 	let incidenteJson = await IncidenteService.create(nome, descricao, lat, lng)
		// 	let incidente = new Incidente(incidenteJson)  
		// 	context.commit('ADD_WIDGET', widget)
		// }
		
		DRAG_WIDGET_START_ACTION(context) {
			context.commit('DRAG_WIDGET_START_MUTATION')
		},
		
		DRAG_WIDGET_STOP_ACTION(context) {
			context.commit('DRAG_WIDGET_STOP_MUTATION')
		},
		
		MOVE_WIDGET_ACTION(context: any, data: any) {
			context.commit('MOVE_WIDGET_MUTATION', data)
		},
	},
	getters: {
		config: (state) => state.config,
		widgets: (state) => state.widgets,
		isWidgetBeingDragged: (state) => state.isWidgetBeingDragged,
		
		widgetById: (state) => (id: number) => {
			return state.widgets.find(widget => widget.id === id)
		}
	},
	modules: {
			
	}
})

// export default new Vuex.Store({


//   // TODO: fix warning
//   actions: {
// 	async FETCH_INCIDENTES(context) {
// 	  let incidentes = await IncidenteService.getAll()
// 	  context.commit('FETCH_INCIDENTES', incidentes)
// 	},

// 	// async ADD_INCIDENTE(context: any, nome: string, descricao: string, lat: number, lng: number) {
// 	//   let incidenteJson = await IncidenteService.create(nome, descricao, lat, lng)
// 	//   let incidente = new Incidente(incidenteJson)  
// 	//   context.commit('ADD_INCIDENTE', incidente)
// 	// },
//   },


// })