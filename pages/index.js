import React,{ useEffect } from 'react'
import Layout from '../components/Layout'
import { CarrousselShops } from '../components/CarrousselShops'
import SearchHome from '../components/SearchHome'
import GridCards from '../components/GridCards'
import { AppDescription } from '../components/AppDescription'

const Index = () => {

  useEffect(() => { //esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout title='Home'>
      <SearchHome />
      <CarrousselShops />
      <AppDescription />
      <GridCards />
    </Layout>
  )
}

export default Index
