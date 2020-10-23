import Layout from '../components/Layout'
import Search from '../components/Search'
import CardStore from '../components/CardStore'
import CardCategory from '../components/CardCategory'
import CardSimpleStore from '../components/CardSimpleStore'
import CardSquare from '../components/CardSquare'
import CardVertical from '../components/CardVertical'
import CardHorizontal from '../components/CardHorizontal'

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
      <CardVertical />
      <CardHorizontal />
    </Layout>
  )
}

export default Index
