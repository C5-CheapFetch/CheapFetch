import React from 'react'

import { Container, Name, Description } from './styles'

export const AppDescription = () => {

  return(
    <Container>
      <Name>Qué es <br/> CheapFetch?</Name>
      <Description>
        Cheap Fetch es un sitio web muy útil que te permite buscar un producto en las tiendas web más populares. <br/><br/>
        Nuestro lema es "Buscar una vez, encontrar en todas partes" y nos lo tomamos muy en serio. :)
      </Description>
    </Container>
  )
}