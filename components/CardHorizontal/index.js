import React from 'react'

import {Card, Image, Url, Name, Price, Category, Store, Info} from './styles'

const CardHorizontal = ({picture_url, url_located, name, price, category, stores}) => {

  return(
    <Url href={url_located} target='_blank' rel='noreferrer'>
      <Card>
        <Image src={picture_url} alt='horizontal img'/>
        <Info>
          <Name>{name}</Name>
          <Price>${price} COP</Price>
          <Category>{category}</Category>
          <Store>{stores}</Store>
        </Info>
      </Card>
    </Url>
  )
}

export default CardHorizontal
