import React from 'react'
import Link from 'next/link'
import {Card, Img, Div, Name} from './styles'


const CardCompare1 = () => {

  return(
    <Div>
    <Card>
    <Link href=''>
      <a className="object">
<<<<<<< HEAD
        <Img src='/images/nikon.jpg' alt='objeto' />
=======
        <Img src='/images/nikon.png' alt='objeto' />
>>>>>>> f221c3d69dd938accdaeb4f1c420a8b00aa0d631
      </a>
    </Link>
    <Name> Nombre del Producto 36 </Name>
    </Card>
    </Div>
  )
}

export default CardCompare1