import React from 'react'

import {Card, Image} from './styles'

const CardHorizontal = ({picture_url}) => {
  
  // img = 'images/musicalbum.jpg'

  return(
    <Card>
      <Image src={picture_url} />
    </Card>
  )
}

export default CardHorizontal