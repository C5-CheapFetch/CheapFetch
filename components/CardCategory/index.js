import Link from 'next/link'
import { Card, Category, Line } from './styles'

const CardStore = ({ category, id }) => {
  category = 'Category 36'
  id = '31'

  const redirect = () => {
    alert(`Ir a la categoria: ${category}`)
  }

  return (
    <Card onClick={redirect}>
      <Category>{category}</Category>
      <Line></Line>
    </Card>
  )
}

export default CardStore
