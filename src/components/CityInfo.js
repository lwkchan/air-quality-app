import React from 'react'
import { fetchCityInfo } from '../api'
import { unstable_createResource as createResource } from 'react-cache'

const cityResource = createResource(fetchCityInfo)

const mainPollutantKey = {
  p2: 'PM2.5',
  p1: 'PM10',
  o3: 'Ozone O3',
  n2: 'Nitrogen dioxide',
  s2: 'Sulfur dioxide',
  co: 'Carbon monoxide'
}

function CityInfo({ chosenCity }) {
  const { weather, pollution } = cityResource.read(chosenCity).data.current
  return (
    <>
      <h1>Current situation in {chosenCity}</h1>
      <h2>Weather</h2>
      <ul>
        <li>Humidity: {weather.hu}%</li>
        <li>Average temperature: {weather.tp} Celsuis</li>
      </ul>
      <h2>Pollution</h2>
      <ul>
        <li>AQI (US): {pollution.aqius}</li>
        <li>Main pollutant: {mainPollutantKey[pollution.mainus]}</li>
      </ul>
    </>
  )
}

export default CityInfo
