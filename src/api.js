import { unstable_createResource } from 'react-cache'

export const APIResource = unstable_createResource(path => {
  return fetch(path).then(response => response.json())
})
