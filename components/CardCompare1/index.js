import React from 'react'
import Link from 'next/link'
import {Card, Img, Div, Name} from './styles'


const CardCompare1 = () => {

  return(
    <Div>
    <Card>
    <Link href=''>
      <a className="object">
        <Img src='/images/nikon.jpg' alt='objeto' />
      </a>
    </Link>
    <Name> Nombre del Producto 36 </Name>
    </Card>
    </Div>
  )
}

export default CardCompare1