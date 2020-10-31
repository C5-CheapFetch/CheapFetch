import React,{ useContext } from 'react'
import { Context } from '../Layout/index.js'

import { Grid, Container, Title } from './styles'

import CardSquare from '../CardSquare'
import CardHorizontal from '../CardHorizontal'
import CardVertical from '../CardVertical'

const GridCards = () => {

  //useContext cumple la función del consumer
  const {products} = useContext(Context)

  // lo de abajo es como se usa useContext, pero, como no cambiaremos el valor del estado, por eso se omitió el setProducts
  // const {products, setProducts} = useContext(Context)


  return(
    <Container>
      <Title>Trending Products</Title>
      <Grid>
        <div className='grid__vertical'>
          <CardVertical {...products[0]} />
        </div>
        <div className='grid__square' >
          <CardSquare {...products[10]}/>
        </div>
        <div className='grid__horizontal'>
          <CardHorizontal {...products[20]}/>
        </div>
        <div className='grid__horizontal--second'>
          <CardHorizontal {...products[30]}/>
        </div>
        <div className='grid__square--second'>
          <CardSquare {...products[40]}/>
        </div>
        <div className='grid__square--third' >
          <CardSquare {...products[50]}/>
        </div>
        <div className='grid__squareTwo--third' >
          <CardSquare {...products[60]}/>
        </div>
        <div className="grid__vertical--third">
          <CardVertical {...products[70]}/>
        </div>
        <div className="grid__squareThree--thrid">
          <CardSquare {...products[80]}/>
        </div>
        <div className="grid__horizontal--fourth">
          <CardHorizontal {...products[90]}/>
        </div>
        <div className="grid__vertical--fourth">
          <CardVertical {...products[100]}/>
        </div>
        <div className="grid__square--fifth">
          <CardSquare {...products[110]}/>
        </div>
        <div className="grid__horizontal--fifth">
          <CardHorizontal {...products[120]}/>
        </div>
      </Grid>
    </Container>
  )
}

export default GridCards