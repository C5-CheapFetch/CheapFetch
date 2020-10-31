import React from 'react'

import {Card, Image} from './styles'

const CardVertical = ({picture_url}) => {
  
  // picture_url = 'images/camera.jpg'

  return(
    <Card>
      <Image src={picture_url} />
    </Card>
  )
}

export default CardVertical