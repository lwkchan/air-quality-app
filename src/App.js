import React, { useState, Suspense } from 'react'
import { unstable_createResource } from 'react-cache'

const APIResource = unstable_createResource(path => {
  return fetch(path).then(response => response.json())
})

function CityInfo(props) {
  const data = APIResource.read(
    'http://api.airvisual.com/v2/city?state=hong-kong&country=hong-kong&city=hong-kong&key=uRkE8CLxyaBr8JGNM'
  )
  console.log(data)
  return <h1>You've chosen {props.chosenCity}</h1>
}

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
