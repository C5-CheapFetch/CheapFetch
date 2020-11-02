import React from 'react'

import {Card, Image, Url} from './styles'

const CardHorizontal = ({picture_url, url_located}) => {

  return(
    <Url href={url_located} target='_blank'>
      <Card>
        <Image src={picture_url} />
      </Card>
    </Url>
  )
}

export default CardHorizontal