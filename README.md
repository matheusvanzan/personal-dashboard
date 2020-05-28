# Personal dashboard

Open-source personal dashboard built with Vue and Flask to gather usefull life data to my day-to-day activities.


## Sketch

This is a simple sketch made with Google Draw

![dashboard-sketch-white](https://user-images.githubusercontent.com/4885447/82977941-b2750100-9fb9-11ea-8ef3-8269fabbe6f9.png)

## Technologies

- Backend with Python Flask
- Frontend with Vue.js
- Communication in REST
- YAML Config file


## Widgets

Each Widget is an integrations to some service. You can create as many widgets as you want for all types.

Widgets can be as simple as a Clock that gets data from the Operating System or as complex as APIs or scraping data from websites for CSS values.

The arguments are not confirmed until I can implement the widgets. Consider that args for non implemented widgets can change in development.

|  Backend  | Frontend  |         Name         |         Source        |        Arguments
|:---------:|:---------:|:--------------------:|:---------------------:|:-----------------------------------------------:|
|  &#10006; |  &#10004; | Simple date and time |           -           | date format <br> 12h or 24h time                |
|  &#10006; |  &#10004; |    Webhook buttons   |           -           | button names and urls                           |
|  &#10006; |  &#10006; |    Currency Quotes   |    AlphaVantage API   | base currency <br> currencies to check          |
|  &#10006; |  &#10006; |     Github status    |       Github API      | username <br> password                          |
|  &#10006; |  &#10006; |    Google calendar   |       Google API      | username <br> token                             |
|  &#10006; |  &#10006; |  Last email messages |      IMAP Server      | IMAP host and port <br> username <br> password  |
|  &#10006; |  &#10006; |     MyFitnessPal     | MyFitnessPal Scraping | username <br> password                          |
|  &#10006; |  &#10006; |     iOS reminders    |   IFTTT Integration   | webhook urls                                    |
|  &#10006; |  &#10006; |     Bank balances    |   Guiabolso Scraping  | username <br> password                          |

## Roadmap





## Licence

GNU General Public License v3.0. See [LICENSE](https://github.com/matheusvanzan/personal-dashboard/blob/master/LICENSE)
