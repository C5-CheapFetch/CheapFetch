import React from 'react'
import Link from 'next/link'
import {Card, Img, Name, Div } from './styles'

const CardCompare2 = () => {

  return(
    <Div>
    <Card>
    <Link href=''>
      <a className="object">
<<<<<<< HEAD
        <Img src='/images/mercadolibreLogo.png' alt='objeto' />
=======
        <Img src='/images/mercadolibreLogo.jpg' alt='objeto' />
>>>>>>> f221c3d69dd938accdaeb4f1c420a8b00aa0d631
      </a>
    </Link>
    <Name> $00.00 </Name>
    </Card>
    </Div>
  )
}

export default CardCompare2