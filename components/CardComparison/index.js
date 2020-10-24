import { Card, Image, ProductLabel } from './styles'

const CardComparison = ({ img, product }) => {
  return (
    <Card>
      <Image src={img}></Image>
      <ProductLabel>{product}</ProductLabel>
    </Card>
  )
}

export default CardComparison
