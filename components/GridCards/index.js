import React, { useContext } from 'react'
import { DataContext } from '../../pages/_app'

import { Grid, Container, Title } from './styles'

import CardSquare from '../CardSquare'
import CardHorizontal from '../CardHorizontal'
import CardVertical from '../CardVertical'

const GridCards = () => {
  //useContext cumple la función del consumer
  const { products } = useContext(DataContext)

  // lo de abajo es como se usa useContext, pero, como no cambiaremos el valor del estado, por eso se omitió el setProducts
  // const {products, setProducts} = useContext(Context

  let bestDeals = []

  if (products.length > 0) {
    products.forEach((element) => {
      if(element.category === " best deals  "){
        bestDeals.push(element)
      }
    })
  }

  return (
    <Container>
      <Title>Best Deals Products</Title>
      <Grid>
        <div className='grid__vertical'>
          <CardVertical {...bestDeals[0]} />
        </div>
        <div className='grid__square'>
          <CardSquare {...bestDeals[1]} />
        </div>
        <div className='grid__horizontal'>
          <CardHorizontal {...bestDeals[2]} />
        </div>
        <div className='grid__horizontal--second'>
          <CardHorizontal {...bestDeals[3]} />
        </div>
        <div className='grid__square--second'>
          <CardSquare {...bestDeals[4]} />
        </div>
        <div className='grid__square--third'>
          <CardSquare {...bestDeals[5]} />
        </div>
        <div className='grid__squareTwo--third'>
          <CardSquare {...bestDeals[6]} />
        </div>
        <div className='grid__vertical--third'>
          <CardVertical {...bestDeals[7]} />
        </div>
        <div className='grid__squareThree--thrid'>
          <CardSquare {...bestDeals[8]} />
        </div>
        <div className='grid__horizontal--fourth'>
          <CardHorizontal {...bestDeals[9]} />
        </div>
        <div className='grid__vertical--fourth'>
          <CardVertical {...bestDeals[10]} />
        </div>
        <div className='grid__square--fifth'>
          <CardSquare {...bestDeals[11]} />
        </div>
        <div className='grid__horizontal--fifth'>
          <CardHorizontal {...bestDeals[1]} />
        </div>
      </Grid>
    </Container>
  )
}

export default GridCards
