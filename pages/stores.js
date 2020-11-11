import React, { useEffect } from 'react'

import Layout from '../components/Layout'
import ListSimpleStore from '../components/ListSimpleStore'
const Stores = () => {

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout title='Stores'>
      <ListSimpleStore />
    </Layout>
  )
}

export default Stores
