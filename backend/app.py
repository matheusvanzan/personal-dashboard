#
#
# https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#creating-the-api
#
#

from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

widgets = [
    {
        'id': 1,
        'type': 'webhook',
        'name': 'IFTTT',
        'width': 2,
        'height': 1,
        'left': 7,
        'top': 1,
        'data': {
            'urls': [
                { 'name': 'Ventilador ON', 'path':  'https://maker.ifttt.com/trigger/tomada_on/with/key/bydgPA8SXGxqraluZW3UyS'},
                { 'name': 'Ventilador OFF', 'path':  'https://maker.ifttt.com/trigger/tomada_off/with/key/bydgPA8SXGxqraluZW3UyS'}
            ]
        }
    },
    {
        'id': 2,
        'type': 'datetime',
        'name': '',
        'width': 2,
        'height': 2,
        'left': 1,
        'top': 1
    },
    {
        'id': 3,
        'type': 'myfitnesspal',
        'name': 'MyFitnessPal',
        'width': 4,
        'height': 2,
        'left': 3,
        'top': 1,
        'data': {
            'macros': [
                { 'name': 'Carbs', 'value': 106, 'units': 'g' },
                { 'name': 'Fat', 'value': 14, 'units': 'g' },
                { 'name': 'Protein', 'value': 48, 'units': 'g' },
                { 'name': 'Calories', 'value': 732, 'units': 'cal' }
            ]
        }
    }
]

@app.route('/widgets')
def widgets_page():
    return jsonify(widgets)
    
    
config = {
    'units': 12
}

@app.route('/config')
def config_page():
    return jsonify(config)

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port='8081')