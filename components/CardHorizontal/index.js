import React from 'react'

import {Card, Image} from './styles'

const CardHorizontal = ({img}) => {
  
  img = 'images/musicalbum.jpg'

  return(
    <Card>
      <Image src={img} />
    </Card>
  )
}

export default CardHorizontal