import Layout from '../components/Layout'
import Search from '../components/Search'
import CardStore from '../components/CardStore'
import CardCategory from '../components/CardCategory'
import CardSimpleStore from '../components/CardSimpleStore'

const Index = () => {
  return (
    <Layout>
      <Search></Search>
      <CardStore></CardStore>
      <br></br>
      <CardCategory></CardCategory>
      <br></br>
      <CardSimpleStore></CardSimpleStore>
    </Layout>
  )
}

export default Index
