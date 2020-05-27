import Widget from '../models/Widget'


export default class WidgetService {

    static base_url: string = 'http://server.matheusvanzan.com:8081'

    static async getAll() : Promise<Array<Widget>>  {
        console.log('Reading JSON...')
        let widgets: Array<Widget> = []

        const response = await fetch(this.base_url + '/widgets')
        const data = await response.json()
        
        console.log(data)

        for (var i=0; i<data.length; i++) {
            let widget = new Widget(data[i])
            widgets.push(widget)
        }
        return widgets
    }

    // static async create(nome: string, descricao: string, lat: number, lng: number) {
    //     // POST

    //     let inc = new Incidente({
    //         'id': '',
    //         'nome': nome,
    //         'descricao': descricao,
    //         'posicao': {
    //             'lat': lat,
    //             'lng': lng
    //         }
    //     })

    //     const response = await fetch(this.base_url + '/incidentes/novo', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(inc.toJson())
    //     })
        
    //     const returnedIncJson = await response.json()
    //     return returnedIncJson
    // }

}