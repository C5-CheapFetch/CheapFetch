import React, { useEffect } from 'react'

import Layout from '../components/Layout'
import Head from 'next/head'
import ListCategories from '../components/ListCategories'
const Categories = () => {

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout title='Categories'>
      <ListCategories />
    </Layout>
  )
}

export default Categories
