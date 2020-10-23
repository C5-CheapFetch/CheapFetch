import React from 'react'

import { Card, Image, Info, Name } from './styles'

const CardInfo = ({picture_url, name, price, stores}) => {
  picture_url = '/images/camera.jpg'
  name = 'Product Name 24px'
  price = 999.99
  stores = 'Amazon'

  return (
    <Card>
      <Image src={picture_url} />
      <Info>
        <Name>{name}</Name>
        <p>${price}</p>
        <p>{stores}</p>
      </Info>
    </Card>
  )
}

export default CardInfo