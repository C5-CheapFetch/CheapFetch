import Layout from '../src/components/Layout'
import Search from '../src/components/Search'
import CardStore from '../src/components/CardStore'
import CardCategory from '../src/components/CardCategory'
import CardSimpleStore from '../src/components/CardSimpleStore'
import CardSquare from '../src/components/CardSquare'

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
