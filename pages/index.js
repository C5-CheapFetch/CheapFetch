import Layout from '../components/Layout'
import { CarrousselShops } from '../components/CarrousselShops'
import SearchHome from '../components/SearchHome'
import GridCards from '../components/GridCards'
import { AppDescription } from '../components/AppDescription'

const Index = () => {
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
