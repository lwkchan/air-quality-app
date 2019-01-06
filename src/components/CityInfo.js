import React from 'react'
import { APIResource } from '../api'

function CityInfo(props) {
  const data = APIResource.read(
    'http://api.airvisual.com/v2/city?state=hong-kong&country=hong-kong&city=hong-kong&key=uRkE8CLxyaBr8JGNM'
  )
  console.log(data)
  return <h1>You've chosen {props.chosenCity}</h1>
}

export default CityInfo
