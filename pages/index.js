import Layout from '../components/Layout'
import Search from '../components/Search'
import CardStore from '../components/CardStore'
import CardCategory from '../components/CardCategory'

const Index = () => {
  return (
    <Layout>
      <Search></Search>
      <CardStore></CardStore>
      <br></br>
      <CardCategory></CardCategory>
    </Layout>
  )
}

export default Index
