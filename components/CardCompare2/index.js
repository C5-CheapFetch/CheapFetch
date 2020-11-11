import React from 'react'
import Link from 'next/link'
import { Card, Img, Name, Div, Anchor } from './styles'
import { useContext } from 'react'
import { DataContext } from '../../pages/_app'
const CardCompare2 = ({ item }) => {
  
  const { stores } = useContext(DataContext)
  
  return (
    <Div>
      <Anchor className='object' href={item.url_located} target='_blank'>
        <Card>
              <Img src={stores[0]['img']} alt='objeto' />
          <Name>${item.price} USD</Name>
        </Card>
      </Anchor>
    </Div>
  )
}

export default CardCompare2
