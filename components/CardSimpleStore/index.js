import Link from 'next/link'
import { Card, Image } from './styles'

const CardSimpleStore = ({ img, url }) => {
  img = '/images/amazon.png'
  url = 'https://www.amazon.com.mx/'

  const redirect = () => {
    document.location.href = url
  }

  return (
    <Card onClick={redirect}>
      <Image src={img}></Image>
    </Card>
  )
}

export default CardSimpleStore
