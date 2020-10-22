import Layout from '../components/Layout'
import Search from '../components/Search'
import CardStore from '../components/CardStore'
import CardCategory from '../components/CardCategory'
import CardSimpleStore from '../components/CardSimpleStore'
import CardSquare from '../components/CardSquare'

const Index = () => {
  return (
    <Layout>
      <Search></Search>
      <CardStore></CardStore>
      <br></br>
      <CardCategory></CardCategory>
      <br></br>
      <CardSimpleStore></CardSimpleStore>
      <CardSquare />
    </Layout>
  )
}

export default Index
