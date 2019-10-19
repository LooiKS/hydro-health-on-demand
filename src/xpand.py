import requests
import json
import pandas as pd
import urllib.parse as code

from datetime import date as d
from datetime import datetime as dt
from datetime import time as t

#Get access token#
##print(str(d.today()) + str(code.quote(' 9:40:00')))
##print(str(d.today()) + str(code.quote(' ' + str(dt.time(dt.now())))))
##print(dt.time(dt.now()))
##print('2019-04-26%209%3A40%3A00')

def get_xpand(parameter, mode):
    headers1 = {
      'X-Secret':'UmNvalVjX09Td2JtY0NHTE9ST3AyNFdpbUdrYTpyTXRQaVNOVzNsTEhHaEREWDZSbFRmYjM0bVVh'
    }

    response1 = requests.get('https://iot.xpand.asia/developer/api/applicationmgt/authenticate', headers = headers1)

    results1 = json.loads(response1.content)
    accessToken = results1["access_token"]

    #Get JWT#
    headers2 = {
                'content-type': 'application/json',
                'Authorization': 'Bearer' + ' ' + accessToken
    }

    body = {
      'username': 'utmgroup02@noreply.com',
      'password': 'teamh2o'
    }

    response2 = requests.post('https://iot.xpand.asia/developer/api/usermgt/v1/authenticate', headers = headers2, data = json.dumps(body))

    results2 = json.loads(response2.content)
    JWT = results2["X-IoT-JWT"]

    #Get data#
    headers3 = {
      'Authorization': 'Bearer' + ' ' + accessToken, 
      'X-IoT-JWT': JWT
    }

    baseURL = 'https://iot.xpand.asia/developer/api/datamgt/v1/user/devicehistory?'
    eventName = 'Try'
    deviceIds = '16492'
##    eventName = 'getData'
##    deviceIds = '16550'
    noOfEvents = '7'
    zoneId = 'Asia%2FKuala_Lumpur'
    eventParams = parameter
    startDate = '2018-08-09%2012%3A00%3A00'
    
    if mode == 'data':
        value = {parameter : [], 'time_s' : []}
        response3 = requests.get(baseURL + 'eventName=' + eventName + '&deviceIds=' + deviceIds + '&noOfEvents=' + noOfEvents + 
                  '&zoneId=' + zoneId + '&eventParams=' + eventParams, 
                  headers = headers3)

        value = {parameter : [], 'time_s' : []}
        results3 = json.loads(response3.content)
        return results3[deviceIds][0][parameter]
    else:
        endDate = str(d.today()) + str(code.quote(' ' + str(dt.time(dt.now()))))
        value = {parameter : [], 'time_s' : []}
        response3 = requests.get(baseURL + 'eventName=' + eventName + '&deviceIds=' + deviceIds + '&startDate=' + startDate + '&endDate=' + endDate +
                  '&zoneId=' + zoneId + '&eventParams=' + eventParams, 
                  headers = headers3)
        results3 = json.loads(response3.content)     
        for i in results3[deviceIds]:
            value[parameter].append(i[parameter])
            value['time_s'].append(i['time_s'])

        data = pd.DataFrame({
        parameter : value[parameter],
        'time_s'   : value['time_s']
        })
        return data

get_xpand('conductivity', 'data')
print(get_xpand('conductivity', 'data'))
##print(get_xpand('oxygen', 'data'))
##print(get_xpand('tds', 'data'))
##print(get_xpand('turbidity', 'data'))
##print(get_xpand('ph', 'data'))
##print(get_xpand('temperature', 'data'))

##print(get_xpand('Height', 'data'))
##a = get_xpand('wqi', 'all')    
##a = get_xpand('wqi', 'all')['wqi'].values
##b = get_xpand('temperature', 'all')['time_s'].values
##print(a)
##print(b)

##print(get_xpand('Conductivity', 'data'))
##print(get_xpand('DO', 'data'))
##print(get_xpand('TDS', 'data'))
##print(get_xpand('Turbidity', 'data'))
##print(get_xpand('pH', 'data'))
##print(get_xpand('Temp', 'data'))
