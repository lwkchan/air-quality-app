const API_ROOT_URL = 'https://api.airvisual.com/v2/'
const CITY_QUERY = 'city?'
const KEY_PARAM = '&key=uRkE8CLxyaBr8JGNM'

const resourceKey = {
  'Hong Kong': 'state=hong-kong&country=hong-kong&city=hong-kong',
  Macau: 'state=taipa&country=macao&city=taipa',
  London: 'state=england&country=uk&city=london',
  'New York': 'state=new-york&country=usa&city=new-york'
}

export const fetchCityInfo = city => {
  const cityParam = resourceKey[city]
  const path = `${API_ROOT_URL}${CITY_QUERY}${cityParam}${KEY_PARAM}`
  return fetch(path).then(response => response.json())
}
