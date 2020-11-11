import React from 'react'
import Link from 'next/link'
import { Card, Img, Div, Name } from './styles'

const CardCompare1 = ({ item }) => {
  return (
    <Div>
      <Card>
        <Link href=''>
          <a className='object'>
            <Img src={item.picture} alt='objeto' />
          </a>
        </Link>
        <Name>{item.name}</Name>
      </Card>
    </Div>
  )
}

export default CardCompare1
