import React from 'react'

import { Card, Image, Info, Name, Price, Store } from './styles'

const CardInfo = ({picture_url, name, price, stores}) => {
  picture_url = '/images/camera.jpg'
  name = 'Product Name 24px lorem ipsum'
  price = 999.99
  stores = 'Amazon'

  return (
    <Card>
      <Image src={picture_url} />
      <Info>
        <Name className='cardinfo__name'>{name}</Name>
        <Price>${price}</Price>
        <Store>{stores}</Store>
      </Info>
    </Card>
  )
}

export default CardInfo