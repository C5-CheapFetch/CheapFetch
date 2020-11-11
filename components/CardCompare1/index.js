import React from 'react'
import Link from 'next/link'
import { Card, Img, Div, Name, CardAnchor, ContainerName } from './styles'

const CardCompare1 = ({ item }) => {
  return (
    <Div>
      <CardAnchor href={item.url_located} target='_blank' className='object'>
        <Img src={item.picture} alt='objeto' />
        <ContainerName>
          <Name>{item.name}</Name>
        </ContainerName>
      </CardAnchor>
    </Div>
  )
}

export default CardCompare1
