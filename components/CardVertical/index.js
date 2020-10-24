import React from 'react'

import {Card, Image} from './styles'

const CardVertical = ({img}) => {
  
  img = 'images/camera.jpg'

  return(
    <Card>
      <Image src={img} />
    </Card>
  )
}

export default CardVertical