import Link from 'next/link'
import { Card, Image, Separator, PriceTag } from './styles'

const CardStore = ({ img, price, url }) => {
  img = '/images/amazon.png'
  price = '150.00'
  url = 'https://www.amazon.com.mx/'
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
