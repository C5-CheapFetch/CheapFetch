import Link from 'next/link'
import { Card, Image, Separator, PriceTag } from './styles'

const CardStore = ({ img, price, url }) => {

  const redirect = () => {
    document.location.href = url
  }

  return (
    <Card onClick={redirect}>
      <Image src={img}></Image>
      <Separator></Separator>
      <PriceTag>${price}</PriceTag>
    </Card>
  )
}

export default CardStore
