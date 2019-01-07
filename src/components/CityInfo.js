import React from 'react'
import { APIResource } from '../api'

const API_ROOT_URL = 'http://api.airvisual.com/v2/'
const CITY_QUERY = 'city?'
const KEY_PARAM = '&key=uRkE8CLxyaBr8JGNM'

const resourceKey = {
  'Hong Kong': 'state=hong-kong&country=hong-kong&city=hong-kong',
  Macau: '',
  London: '',
  'New York': ''
}

function CityInfo(props) {
  console.log('props', props)
  const data = APIResource.read(
    'http://api.airvisual.com/v2/city?state=hong-kong&country=hong-kong&city=hong-kong&key=uRkE8CLxyaBr8JGNM'
  )
  console.log(data)
  return <h1>You've chosen {props.chosenCity}</h1>
}

export default CityInfo
