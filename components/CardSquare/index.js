import React from 'react'

import {Card, Image, Name, Price, Category, Store, Info} from './styles'

const CardSquare = ({picture_url, url_located, name, price, category, stores}) => {

  return(
    <a href={url_located} target='_blank'>
      <Card>
        <Image src={picture_url}/>
        <Info>
          <Name>{name}</Name>
          <Price>${price} COP</Price>
          <Category>{category}</Category>
          <Store>{stores}</Store>
        </Info>
      </Card>
    </a>
  )
}

export default CardSquare