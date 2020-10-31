import { useRouter } from 'next/router'
import { Card, Category, Line } from './styles'

const CardStore = ({ category}) => {
    const router = useRouter()

  const redirect = () => {
        router.push(`/search/all/${category}`)
  }

  return (
    <Card onClick={redirect}>
      <Category>{category}</Category>
      <Line></Line>
    </Card>
  )
}

export default CardStore
