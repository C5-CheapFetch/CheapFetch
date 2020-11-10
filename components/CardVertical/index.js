import React from 'react'

import {Card, Image, Name, Price, Category, Store, Info} from './styles'

const CardVertical = ({picture_url, url_located, name, price, category, stores}) => {

  return(
    <a href={url_located} target='_blank' rel='noreferrer'>
      <Card>
        <Image src={picture_url} alt='vertical img'/>
        <Info>
          <Name>{name}</Name>
          <Price>${price} USD</Price>
          <Category>{category}</Category>
          <Store>{stores}</Store>
        </Info>
      </Card>
    </a>
  )
}

export default CardVertical
