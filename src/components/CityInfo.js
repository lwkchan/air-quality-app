import React, { useState } from 'react'
import { fetchCityInfo } from '../api'
import styled from 'styled-components'
import { unstable_createResource as createResource } from 'react-cache'

let cityResource = createResource(fetchCityInfo)

const mainPollutantKey = {
  p2: 'PM2.5',
  p1: 'PM10',
  o3: 'Ozone O3',
  n2: 'Nitrogen dioxide',
  s2: 'Sulfur dioxide',
  co: 'Carbon monoxide'
}

const ButtonsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 5px;
  }
`

function CityInfo({ chosenCity, resetChosenCity }) {
  const [featureMessage, setFeatureMessage] = useState(null)
  const { weather, pollution } = cityResource.read(chosenCity).data.current
  return (
    <>
      <h2>{chosenCity}</h2>
      <h3>Weather</h3>
      <ul>
        <li>Humidity: {weather.hu}%</li>
        <li>Average temperature: {weather.tp} Celsuis</li>
      </ul>
      <h3>Pollution</h3>
      <ul>
        <li>AQI (US): {pollution.aqius}</li>
        <li>Main pollutant: {mainPollutantKey[pollution.mainus]}</li>
      </ul>
      <ButtonsContainer>
        <button
          onClick={() => {
            setFeatureMessage('Feature coming soon')
          }}
        >
          Refresh
        </button>
        <button
          onClick={() => {
            resetChosenCity()
          }}
        >
          Back
        </button>
        {featureMessage && <p>{featureMessage}</p>}
      </ButtonsContainer>
    </>
  )
}

export default CityInfo
