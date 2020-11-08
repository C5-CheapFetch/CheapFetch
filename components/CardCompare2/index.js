import React from 'react'
import Link from 'next/link'
import {Card, Img, Name, Div } from './styles'

const CardCompare2 = () => {

  return(
    <Div>
    <Card>
    <Link href=''>
      <a className="object">
        <Img src='/images/mercadolibreLogo.jpg' alt='objeto' />
      </a>
    </Link>
    <Name> $00.00 </Name>
    </Card>
    </Div>
  )
}

export default CardCompare2