import { Card, Image } from './styles'

const CardSimpleStore = ({ img, url }) => {
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
