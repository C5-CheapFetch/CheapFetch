import React from 'react'
import Link from 'next/link'
import { Card, Img, Name, Div } from './styles'
import { useContext } from 'react'
import { DataContext } from '../../pages/_app'
const CardCompare2 = ({ item }) => {
  const { stores } = useContext(DataContext)
  return (
    <Div>
      <Card>
        <Link href={item['url_located']}>
          <a className='object'>
            <Img src={stores[0]['img']} alt='objeto' />
          </a>
        </Link>
        <Name> {item.price} </Name>
      </Card>
    </Div>
  )
}

export default CardCompare2
