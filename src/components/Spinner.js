import React from 'react'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 80%;
  }
`
const SpinnerContent = styled.h2`
  margin: 50px auto;
  animation: ${slide} 1s ease-in-out 0s infinite;
`

function Spinner() {
  return (
    <SpinnerContent>
      <span role="img" aria-label="loading">
        💨
      </span>
    </SpinnerContent>
  )
}

export default Spinner
