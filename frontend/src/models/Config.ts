

export default class Config {

    units: number

    constructor(json: any) {
        this.units = json['units']
    }

    toJson() {
        return {
            'units': this.units
        }
    }
}