import Layout from '../components/Layout'
import Search from '../components/Search'
import CardStore from '../components/CardStore'
import CardCategory from '../components/CardCategory'
import CardSimpleStore from '../components/CardSimpleStore'
import CardSquare from '../components/CardSquare'
import CardVertical from '../components/CardVertical'
import CardHorizontal from '../components/CardHorizontal'
import CardInfo from '../components/CardInfo'

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
      <CardInfo />
    </Layout>
  )
}

export default Index
