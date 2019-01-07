import React, { useState, Suspense } from 'react'
import styled from 'styled-components'
import CityInfo from './CityInfo'
import Spinner from './Spinner'

const availableCities = ['Hong Kong', 'London', 'Macau', 'New York']

const AppContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 80%;
  }
`
const MainHeader = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`

const CitiesList = styled.ul`
  list-style-type: none;
  li {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`

function App() {
  const [chosenCity, setChosenCity] = useState(null)
  return (
    <AppContainer>
      <MainHeader
        onClick={() => {
          setChosenCity(null)
        }}
      >
        Air quality app{' '}
        <span role="img" aria-label="wind">
          💨
        </span>
      </MainHeader>
      {chosenCity ? (
        <>
          <Suspense fallback={<Spinner />}>
            <CityInfo chosenCity={chosenCity} />
            <button
              onClick={() => {
                setChosenCity(null)
              }}
            >
              Back
            </button>
          </Suspense>
        </>
      ) : (
        <>
          <h2>Currently available cities:</h2>
          <CitiesList>
            {availableCities.map(city => (
              <li
                key={`city--${city}`}
                onClick={() => {
                  setChosenCity(city)
                }}
              >
                {city}
              </li>
            ))}
          </CitiesList>
        </>
      )}
    </AppContainer>
  )
}

export default App
