# Personal dashboard

Open-source personal dashboard built with Vue and Flask to gather usefull life data to my day-to-day activities.


## Sketch

This is a simple sketch made with Google Draw

![dashboard-sketch-white](https://user-images.githubusercontent.com/4885447/83302742-3c97b200-a1d2-11ea-86dc-3aa168a625dd.png)

## Technologies

- Backend with Python Flask
- Frontend with Vue.js
- Communication in REST
- YAML config file


## Widgets

Each Widget is an integrations to some service. You can create as many widgets as you want for all types.

Widgets can be as simple as a Clock that gets data from the Operating System or as complex as APIs or scraping data from websites for CSS values.

The arguments are not confirmed until I can implement the widgets. Consider that args for non implemented widgets can change in development.

|  Backend  | Frontend  |         Name         |         Source        |        Arguments
|:---------:|:---------:|:--------------------:|:---------------------:|:-----------------------------------------------:|
|  &#10006; |  &#10004; | Simple date and time |           -           | date format <br> 12h or 24h time                |
|  &#10006; |  &#10004; |    Webhook buttons   |           -           | button names and urls                           |
|  &#10006; |  &#10006; |      Speed test      | JavaScript speed test | frequency to check                              |
|  &#10006; |  &#10006; |    Currency Quotes   |    AlphaVantage API   | base currency <br> currencies to check          |
|  &#10006; |  &#10006; |     Github status    |       Github API      | username <br> password                          |
|  &#10006; |  &#10006; |    Google calendar   |       Google API      | username <br> token                             |
|  &#10006; |  &#10006; |  Last email messages |      IMAP Server      | IMAP host and port <br> username <br> password  |
|  &#10006; |  &#10006; |     MyFitnessPal     | MyFitnessPal Scraping | username <br> password                          |
|  &#10006; |  &#10006; |     iOS reminders    |   IFTTT Integration   | webhook urls                                    |
|  &#10006; |  &#10006; |     Bank balances    |   Guiabolso Scraping  | username <br> password                          |


## Current version 0.0.3

![dashboard-current-preview](https://user-images.githubusercontent.com/4885447/83304218-d8c2b880-a1d4-11ea-8f39-4b7a69f600fb.png)


## Changelog

#### 0.0.1

- Backend Flask app
- Frontend Vue.js app with Navbar component

#### 0.0.2

- Add /widgets and /config urls to backend
- Add variable units to config
- Add main screen to frontend
- Add Widget components to frontend with mock data
    - WidgetComponent
    - DatetimeWidgetComponent
    - MyfitnesspalWidgetComponent
    - WebhookWidgetComponent

### 0.0.3

- Add GridComponent to preview widget aligment grid
- Add Widget and Config models
- Add WidgetService and ConfigService to get data form backend
- Add Vuex to store config and widgets data

## Licence

GNU General Public License v3.0. See [LICENSE](https://github.com/matheusvanzan/personal-dashboard/blob/master/LICENSE)
