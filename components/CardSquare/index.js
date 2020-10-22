import React from 'react'

import {Card, Image} from './styles'

const CardSquare = ({img}) => {
  
  img = 'images/keyboard.jpg'

  return(
    <Card>
      <Image src={img} />
    </Card>
  )
}

export default CardSquare