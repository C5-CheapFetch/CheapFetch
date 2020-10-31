import React from 'react'

import {Card, Image} from './styles'

const CardVertical = ({picture_url, url_located}) => {

  return(
    <a href={url_located} target='_blank'>
      <Card>
        <Image src={picture_url} />
      </Card>
    </a>
  )
}

export default CardVertical