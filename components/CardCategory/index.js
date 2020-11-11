import { useRouter } from 'next/router'
import { Card, Category, Line } from './styles'

const CardCategory = ({ category}) => {
    const router = useRouter()

  const redirect = () => {
        router.push(`/search/all/${category}`)
  }

  return (
    <Card onClick={redirect}>
      <Category>{category}</Category>
      <Line className='CardCategory__line'></Line>
    </Card>
  )
}

export default CardCategory