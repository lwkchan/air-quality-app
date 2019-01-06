import React from 'react'
import styles from './styles/Spinner.module.css'

function Spinner() {
  return (
    <>
      <div class="span">
        <div class={styles.location_indicator} />
      </div>
    </>
  )
}

export default Spinner
