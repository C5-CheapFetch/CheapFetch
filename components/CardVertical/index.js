import React from 'react'

import { Card, Image } from './styles'

const CardVertical = ({ picture_url, url_located }) => {
  return (
    <a href={url_located} target='_blank' rel='noreferrer'>
      <Card>
        <Image src={picture_url} alt='vertical img' />
      </Card>
    </a>
  )
}

export default CardVertical
