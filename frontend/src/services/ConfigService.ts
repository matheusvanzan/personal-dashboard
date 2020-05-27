import Config from '../models/Config'


export default class ConfigService {

    static base_url: string = 'http://server.matheusvanzan.com:8081'

    static async getConfig() : Promise<Config>  {
        
        const response = await fetch(this.base_url + '/config')
        const data = await response.json()
        return new Config(data)
    }
}