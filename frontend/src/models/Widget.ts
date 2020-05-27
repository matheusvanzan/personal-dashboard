

export default class Widget {

    id: number
    type: string
    name: string
    width: number
    height: number
    left: number
    top: number
    data: any

    constructor(json: any) {
        
        this.id = json['id']
        this.name = json['name']
        this.type = json['type']
        this.width = json['width']
        this.height = json['height']
        this.left = json['left']
        this.top = json['top']
        this.data = json['data']
    }

    toJson() {
        return {
            'id': this.id,
            'name': this.name,
            'type': this.type,
            'width': this.width,
            'height': this.height,
            'left': this.left,
            'top': this.top,
            'data': this.data
        }
    }
}
