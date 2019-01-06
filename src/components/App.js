import React, { useState, Suspense } from 'react'
import CityInfo from './CityInfo'

const availableCities = ['Hong Kong', 'London', 'Macau', 'New York']

function App() {
  const [chosenCity, setChosenCity] = useState(null)
  return (
    <div className="App">
      <h1>Air quality app</h1>
      {chosenCity ? (
        <>
          <Suspense fallback={<h1>Loading...</h1>}>
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
          <ul>
            {availableCities.map(city => (
              <li
                key={`city--${city}`}
                onClick={event => {
                  setChosenCity(city)
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default App
