import React from 'react'

import { Grid } from './styles'

import CardSquare from '../CardSquare'
import CardHorizontal from '../CardHorizontal'
import CardVertical from '../CardVertical'

const GridCards = () => {

  // se obtienen los productos del local storage y se almacenan en una variable
  const itemsLocalStorage = JSON.parse( localStorage.getItem("items"))

  return(
    <Grid>
      <CardSquare {...itemsLocalStorage[50]} />
      <CardVertical {...itemsLocalStorage[100]} />
      <CardHorizontal {...itemsLocalStorage[120]} />
    </Grid>
  )
}

export default GridCards