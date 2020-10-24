import Link from 'next/link'
import { Card, Category, Line } from './styles'

const CardStore = ({ category, id }) => {

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
