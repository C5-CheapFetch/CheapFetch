import React from 'react'
import Context from '../../Context'

import { Grid, Container, Title } from './styles'

import CardSquare from '../CardSquare'
import CardHorizontal from '../CardHorizontal'
import CardVertical from '../CardVertical'

const GridCards = () => {

  return(
    <Container>
      <Title>Trending Products</Title>
      <Context.Consumer>
        {
          ({ itemList }) =>
          <Grid>
            <div className='grid__vertical'>
              <CardVertical {...itemList[10]}/>
            </div>
            <div className='grid__square' >
              <CardSquare {...itemList[30]}/>
            </div>
            <div className='grid__horizontal'>
              <CardHorizontal {...itemList[50]}/>
            </div>
            <div className='grid__horizontal--second'>
              <CardHorizontal {...itemList[70]}/>
            </div>
            <div className='grid__square--second'>
              <CardSquare {...itemList[90]}/>
            </div>
            <div className='grid__square--third' >
              <CardSquare {...itemList[110]}/>
            </div>
            <div className='grid__squareTwo--third' >
              <CardSquare {...itemList[130]}/>
            </div>
            <div className="grid__vertical--third">
              <CardVertical {...itemList[150]}/>
            </div>
            <div className="grid__squareThree--thrid">
              <CardSquare {...itemList[170]}/>
            </div>
            <div className="grid__horizontal--fourth">
              <CardHorizontal {...itemList[190]}/>
            </div>
            <div className="grid__vertical--fourth">
              <CardVertical {...itemList[210]}/>
            </div>
            <div className="grid__square--fifth">
              <CardSquare {...itemList[230]}/>
            </div>
            <div className="grid__horizontal--fifth">
              <CardHorizontal {...itemList[250]}/>
            </div>
          </Grid>
        }
      </Context.Consumer>
    </Container>
  )
}

export default GridCards