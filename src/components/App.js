import React, { useState, Suspense } from 'react'
import CityInfo from './CityInfo'
import Spinner from './Spinner'
import styles from './styles/App.module.css'

const availableCities = ['Hong Kong', 'London', 'Macau', 'New York']

function App() {
  const [chosenCity, setChosenCity] = useState(null)
  return (
    <div className="App">
      <h1 className={styles.header}>Air quality app</h1>
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
          <ul>
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
          </ul>
        </>
      )}
    </div>
  )
}

export default App
