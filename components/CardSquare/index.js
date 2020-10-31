import React from 'react'

import {Card, Image} from './styles'

const CardSquare = ({picture_url}) => {
  
  // picture_url = 'images/keyboard.jpg'

  return(
    <Card>
      <Image src={picture_url} />
    </Card>
  )
}

export default CardSquare