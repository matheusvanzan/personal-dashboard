#
#
# https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#creating-the-api
#
#

from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

from datetime import datetime, date

import myfitnesspal
import json
import yaml


app = Flask(__name__)
app.config['DEBUG'] = True

CORS(app)
app.config['CORS_HEADERS'] = 'application/json'

mfp_client = myfitnesspal.Client('vanzan2015')



@app.route('/widgets')
def widgets_page():
    with open('widgets.yml', 'r') as f:
        widgets = yaml.load(f.read())
        
        for i, widget in enumerate(widgets['widgets']):
            
            widget.update({ 'id': i+1 })
            
            if widget['type'] == 'myfitnesspal':
                jday = mfp_client.get_date(date.today()).totals
                
                widget['data'].update({ 
                    'macros': [
                        { 'name': 'Carbs',    'units': 'g',   'value':  jday['carbohydrates'] },
                        { 'name': 'Fat',      'units': 'g',   'value':  jday['fat']           },
                        { 'name': 'Protein',  'units': 'g',   'value':  jday['protein']       },
                        { 'name': 'Calories', 'units': 'cal', 'value':  jday['calories']      }
                    ]
                })
        
        return jsonify(widgets)
    
    
config = {
    'units': 12
}

@app.route('/config')
def config_page():
    return jsonify(config)
    
    
    
# @app.route('/<int:year>/<int:month>/<title>')
# def article(year, month, title):
    
    
@app.route('/api/reminders/add', methods=['POST'])
def add_reminder():
    
    # data = json.loads(request.data)
    # print(data)
    
    print(request.data.decode('utf-8'))
    # print(request.form)
    
    
    return jsonify({})
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='8081')